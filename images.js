// =====================================================================
//  IMAGES.JS  —  Srinagar Tourism
//  Reference file for all image URLs used across the site.
//  To swap an image: copy the new URL, find the key below,
//  then do a Find & Replace in index.html for that URL.
//  Unsplash tip: change ?w= to adjust size (600=card, 1400=hero).
// =====================================================================

// HOW TO USE:
// 1. Find the key you want to change, e.g. HERO_BG
// 2. Open index.html and find the current URL listed below
// 3. Replace it with your new URL
// 4. Save — done. No JavaScript needed.

const IMAGE_REFERENCE = {

  // ── HERO ──────────────────────────────────────────────────────────
  HERO_BG:
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85&auto=format&fit=crop',

  // ── HOME ABOUT SECTION ────────────────────────────────────────────
  ABOUT_DAL_LAKE:
    'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=85&auto=format&fit=crop',

  // ── FEATURED PACKAGE CARDS (home) ─────────────────────────────────
  PKG_SRINAGAR_CARD:
    'https://images.pexels.com/photos/6739193/pexels-photo-6739193.jpeg?w=1400&auto=compress&cs=tinysrgb',
  PKG_KASHMIR_SPECIAL_CARD:
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format&fit=crop',
  PKG_HONEYMOON_CARD:
    'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80&auto=format&fit=crop',
  PKG_LADAKH_CARD:
    'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&q=80&auto=format&fit=crop',

  // ── DESTINATION BENTO TILES ───────────────────────────────────────
  DEST_SRINAGAR_TILE:
    'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=900&q=85&auto=format&fit=crop',
  DEST_GULMARG_TILE:
    'https://images.unsplash.com/photo-1518560636955-e0b3aca3e6b9?w=700&q=85&auto=format&fit=crop',
  DEST_PAHALGAM_TILE:
    'https://images.unsplash.com/photo-1592425989956-3db7cd40ade2?w=700&q=85&auto=format&fit=crop',
  DEST_SONAMARG_TILE:
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=700&q=85&auto=format&fit=crop',
  DEST_DOODHPATHRI_TILE:
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=85&auto=format&fit=crop',
  DEST_GUREZ_TILE:
    'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=700&q=85&auto=format&fit=crop',

  // ── DESTINATION PAGE HEROES (full-width banners) ──────────────────
  DEST_SRINAGAR_HERO:
    'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=1400&q=85&auto=format&fit=crop',
  DEST_GULMARG_HERO:
    'https://images.unsplash.com/photo-1518560636955-e0b3aca3e6b9?w=1400&q=85&auto=format&fit=crop',
  DEST_PAHALGAM_HERO:
    'https://images.unsplash.com/photo-1592425989956-3db7cd40ade2?w=1400&q=85&auto=format&fit=crop',
  DEST_SONAMARG_HERO:
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1400&q=85&auto=format&fit=crop',
  DEST_DOODHPATHRI_HERO:
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=85&auto=format&fit=crop',
  DEST_GUREZ_HERO:
    'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1400&q=85&auto=format&fit=crop',

  // ── PAGE BANNERS ──────────────────────────────────────────────────
  ABOUT_PAGE_BANNER:
    'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1400&q=85&auto=format&fit=crop',
  CONTACT_BANNER:
    'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1400&q=85&auto=format&fit=crop',
  CAR_RENTALS_BANNER:
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1400&q=85&auto=format&fit=crop',
  PKG_BANNER_KASHMIR:
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1400&q=85&auto=format&fit=crop',
  PKG_BANNER_LADAKH:
    'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1400&q=85&auto=format&fit=crop',
  PKG_BANNER_VAISHNO:
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=1400&q=85&auto=format&fit=crop',

  // ── PACKAGE GRID CARDS ────────────────────────────────────────────
  PKG_SRINAGAR_GRID:
    'https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=600&q=80&auto=format&fit=crop',
  PKG_PAHALGAM_GRID:
    'https://images.unsplash.com/photo-1592425989956-3db7cd40ade2?w=600&q=80&auto=format&fit=crop',
  PKG_SONAMARG_GRID:
    'https://images.unsplash.com/photo-1564499849-b5cf4a44a26f?w=600&q=80&auto=format&fit=crop',
  PKG_KASHMIR_HOLIDAY:
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format&fit=crop',
  PKG_KASHMIR_SPECIAL:
    'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&q=80&auto=format&fit=crop',
  PKG_KASHMIR_VALLEY:
    'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80&auto=format&fit=crop',
  PKG_HONEYMOON_GRID:
    'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80&auto=format&fit=crop',
  PKG_JK_VALLEY_TOUR:
    'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=600&q=80&auto=format&fit=crop',
  PKG_JK_TOUR:
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80&auto=format&fit=crop',
  PKG_GRAND_KASHMIR:
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80&auto=format&fit=crop',
  PKG_AMARNATH:
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&q=80&auto=format&fit=crop',
  PKG_KASHMIR_LADAKH:
    'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&q=80&auto=format&fit=crop',
  PKG_LEH_LADAKH:
    'https://images.unsplash.com/photo-1593951316498-f9f3cde60dd0?w=600&q=80&auto=format&fit=crop',
  PKG_ENCHANTING_LADAKH:
    'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80&auto=format&fit=crop',
  PKG_VAISHNO_DEVI:
    'https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=600&q=80&auto=format&fit=crop',
  PKG_KATRA_SRINAGAR:
    'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&q=80&auto=format&fit=crop',
  PKG_VAISHNO_KASHMIR:
    'https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80&auto=format&fit=crop'

};
