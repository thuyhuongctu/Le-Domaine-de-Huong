/* Trang viên tri thức - service worker.
   Nâng số CACHE mỗi lần đổi nội dung, nếu không khách cũ vẫn thấy bản cũ.
   Tệp .mp3/.mp4 và assets/canh/thap.html cố ý KHÔNG khai ở đây: nặng, mà
   thiếu chúng thì cảnh vẫn chạy. */
const CACHE = 'trangvien-v2';
const CORE = [
  "./",
  "assets/css/achievements.css",
  "assets/css/fonts.css",
  "assets/css/hud-gon.css",
  "assets/css/minigame.css",
  "assets/css/mobile-ux.css",
  "assets/css/music.css",
  "assets/css/onboarding.css",
  "assets/css/play-loop.css",
  "assets/css/side-quests.css",
  "assets/css/site-chrome.css",
  "assets/css/story-quest.css",
  "assets/fonts/baloo2-vn.woff2",
  "assets/fonts/bevietnampro-400-vn.woff2",
  "assets/fonts/bevietnampro-500-vn.woff2",
  "assets/fonts/bevietnampro-600-vn.woff2",
  "assets/fonts/bevietnampro-700-vn.woff2",
  "assets/img/cheo-xuong-dong-sen.webp",
  "assets/img/huong-ai-chan-dung.webp",
  "assets/img/huong-ai-chao.webp",
  "assets/img/huong-ai-cuon-thu.webp",
  "assets/img/huong-ai-dan-nguyet.webp",
  "assets/img/huong-ai-doc-sach.webp",
  "assets/img/huong-ai-sen-sang.webp",
  "assets/img/huong-ai-sen.webp",
  "assets/img/huong-ai-thuyen.webp",
  "assets/img/huong-ai-xe-dap.webp",
  "assets/img/khu-am-nhac-dan-nguyet.webp",
  "assets/img/khu-gioi-thieu-chong-tra.webp",
  "assets/img/khu-hoc-thuat-an-thu.webp",
  "assets/img/khu-loi-ke-den-long.webp",
  "assets/img/khu-thu-vien-thuyen.webp",
  "assets/img/khu-tuong-lai-xe-dap.webp",
  "assets/img/lr-seal-round.webp",
  "assets/js/achievements.js",
  "assets/js/dongho.js",
  "assets/js/minigame.js",
  "assets/js/music.js",
  "assets/js/onboarding.js",
  "assets/js/play-loop.js",
  "assets/js/save-progress.js",
  "assets/js/side-quests.js",
  "assets/js/site-chrome.js",
  "assets/js/sound-fx.js",
  "assets/js/story-quest.js",
  "assets/models/kenney/LICENSE-kenney-nature-kit.txt",
  "assets/models/kenney/tree_palm.glb",
  "assets/models/kenney/tree_palmBend.glb",
  "assets/models/kenney/tree_palmShort.glb",
  "assets/vendor/GLTFLoader-r128.js",
  "assets/vendor/three-r128.min.js",
  "assets/video/cong-sen-chao-poster.webp",
  "favicon.ico",
  "icons/apple-touch-icon.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/icon-maskable-192.png",
  "icons/icon-maskable-512.png",
  "index.html",
  "manifest.webmanifest"
];
self.addEventListener('install', e => { self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE))); });
self.addEventListener('activate', e => { e.waitUntil(
  caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
