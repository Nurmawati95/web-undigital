import { useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase.js'
import { quickActions as fallbackActions } from '../data/formulir.js'

const FALLBACK = {
  headingTitle: 'Formulir Pengaturan Undangan',
  headingSubtitle: 'Lengkapi detail mempelai, jadwal prosesi, dan visual cover digital Anda.',
  badgeLabel: 'Live Preview',
  showBadge: true,
  showOpenLink: true,
  openLinkLabel: 'Buka Tautan',
}

// Hook: ambil event + form_headers + quick_actions dari Supabase.
// - eventSlug: slug event (cth: 'the-wedding-of-putra-putri')
// - Jika Supabase belum dikonfigurasi / error -> pakai fallback lokal agar UI tetap jalan.
export function useFormHeader(eventSlug) {
  const [state, setState] = useState({
    loading: true,
    eventTitle: '',
    header: FALLBACK,
    actions: fallbackActions,
  })

  useEffect(() => {
    let cancelled = false
    async function load() {
      // Belum ada env -> langsung fallback (supabase = null)
      if (!isSupabaseConfigured || !supabase) {
        if (!cancelled) setState((s) => ({ ...s, loading: false }))
        return
      }
      try {
        const slug = eventSlug || import.meta.env.VITE_DEFAULT_EVENT_SLUG || null

        let eventRow = null
        if (slug) {
          const { data, error } = await supabase
            .from('events')
            .select('id, slug, title')
            .eq('slug', slug)
            .maybeSingle()
          if (error) throw error
          eventRow = data
        } else {
          const { data, error } = await supabase
            .from('events')
            .select('id, slug, title')
            .order('updated_at', { ascending: false })
            .limit(1)
            .maybeSingle()
          if (error) throw error
          eventRow = data
        }

        let header = FALLBACK
        let actions = fallbackActions

        if (eventRow) {
          const { data: h } = await supabase
            .from('form_headers')
            .select('heading_title, heading_subtitle, badge_label, show_badge, show_open_link, open_link_label')
            .eq('event_id', eventRow.id)
            .maybeSingle()
          if (h) {
            header = {
              headingTitle: h.heading_title ?? FALLBACK.headingTitle,
              headingSubtitle: h.heading_subtitle ?? FALLBACK.headingSubtitle,
              badgeLabel: h.badge_label ?? FALLBACK.badgeLabel,
              showBadge: h.show_badge ?? true,
              showOpenLink: h.show_open_link ?? true,
              openLinkLabel: h.open_link_label ?? FALLBACK.openLinkLabel,
            }
          }
          // quick actions per-event dulu, kalau kosong pakai yang global (event_id null)
          const { data: perEvent } = await supabase
            .from('quick_actions')
            .select('action_id, label, icon')
            .eq('event_id', eventRow.id)
            .eq('is_active', true)
            .order('sort_order')
          if (perEvent && perEvent.length > 0) {
            actions = perEvent.map((r) => ({ id: r.action_id, label: r.label, icon: r.icon }))
          } else {
            const { data: global } = await supabase
              .from('quick_actions')
              .select('action_id, label, icon')
              .is('event_id', null)
              .eq('is_active', true)
              .order('sort_order')
            if (global && global.length > 0) {
              actions = global.map((r) => ({ id: r.action_id, label: r.label, icon: r.icon }))
            }
          }
        } else {
          // tanpa event: tetap coba quick actions global
          const { data: global } = await supabase
            .from('quick_actions')
            .select('action_id, label, icon')
            .is('event_id', null)
            .eq('is_active', true)
            .order('sort_order')
          if (global && global.length > 0) {
            actions = global.map((r) => ({ id: r.action_id, label: r.label, icon: r.icon }))
          }
        }

        if (!cancelled) {
          setState({
            loading: false,
            eventTitle: eventRow?.title ?? '',
            header,
            actions,
          })
        }
      } catch (e) {
        console.warn('[useFormHeader] fallback lokal:', e?.message)
        if (!cancelled) setState((s) => ({ ...s, loading: false }))
      }
    }
    load()
    return () => { cancelled = true }
  }, [eventSlug])

  return state
}
