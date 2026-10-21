# Mã nguồn và tài nguyên của bên thứ ba

Kiểm kê đầy đủ phần **không** thuộc bản quyền của tác giả. Phần còn lại của kho
chịu các điều khoản ở `LICENSE`.

Bản kiểm kê này cố ý nêu ra chứ không giấu đi: hồ sơ nào giấu phần bên thứ ba
thì chính chỗ ấy là điểm yếu, còn nêu ra thì phần thuộc về tác giả vững hơn hẳn.

---

## 1. Thư viện chạy trên trang

### three.js r128

| | |
| --- | --- |
| Đường dẫn | `assets/vendor/three-r128.min.js` |
| Nguồn | <https://github.com/mrdoob/three.js> |
| Giấy phép | MIT — Copyright © 2010–2021 three.js authors (`assets/vendor/three-LICENSE.txt`) |
| Đã sửa? | **Không.** Nguyên bản phát hành. |

### GLTFLoader (three.js r128)

| | |
| --- | --- |
| Đường dẫn | `assets/vendor/GLTFLoader-r128.js` |
| Nguồn | gói npm `three@0.128.0`, `examples/js/loaders/GLTFLoader.js` |
| Giấy phép | MIT — three.js authors |
| Đã sửa? | **Không.** |

---

## 2. Mô hình 3D

### Kenney Nature Kit 2.1 — ba cây dừa

| | |
| --- | --- |
| Đường dẫn | `assets/models/kenney/tree_palm.glb`, `tree_palmBend.glb`, `tree_palmShort.glb` |
| Nguồn | <https://kenney.nl/assets/nature-kit> |
| Giấy phép | **CC0 1.0** (`assets/models/kenney/LICENSE-kenney-nature-kit.txt`) — không bắt buộc ghi công, vẫn ghi cho rõ nguồn |
| Đã sửa? | Tệp giữ nguyên. Lúc chạy thay vật liệu bằng hai màu sẵn có của cảnh (`#C08A5A`, `#79B25C`) và đặt `metalness` về 0, vì Nature Kit khai `metallicFactor = 1` cho mọi vật liệu mà cảnh này không có ảnh môi trường. |

---

## 3. Cảnh tháp — tác phẩm phái sinh

### ThreeUI «Towers»

| | |
| --- | --- |
| Đường dẫn | `assets/canh/thap.html` |
| Nguồn | `src/shaders/japanese-tower/Towers.html` của <https://github.com/MengTo/threeui> |
| Giấy phép | MIT — Copyright © 2026 Meng To (`assets/vendor/threeui-LICENSE.txt`) |
| Đã sửa? | **Có.** Bỏ phần three.js và nhạc nền nhúng sẵn, nối sang bản three.js dùng chung của kho; dịch nhãn các nút sang hai thứ tiếng; nhận tham số `?lang=`; chặn phần trăm âm ở chỗ hiện chữ. |

**Đây là tác phẩm phái sinh, không phải phần tự viết.** Trang được nhúng vào khu
«Kho tương lai» bằng iframe, gắn lúc mở bảng và gỡ lúc đóng.

---

## 4. Bộ chữ

| | |
| --- | --- |
| Đường dẫn | `assets/fonts/baloo2-vn.woff2`, `bevietnampro-*.woff2` |
| Giấy phép | SIL Open Font Licence 1.1 (`assets/fonts/OFL-Baloo2.txt`, `OFL-BeVietnamPro.txt`) |
| Đã sửa? | Chỉ cắt bộ ký tự về phần tiếng Việt và Latin. |

---

## 5. Những gì KHÔNG phải của bên thứ ba

Để tránh hiểu nhầm, ba thứ hay bị cho là lấy từ nơi khác nhưng không phải:

- **Lời dẫn** trong `assets/voice/` là **giọng thật của tác giả**, thu bằng tiếng
  Việt và tiếng Anh.
- **Toàn bộ hình khối của cảnh** — tám khu, thềm bậc, lan can, cổng, mái, mặt
  đất, sông, lối mòn, cây cỏ — dựng bằng mã trong `index.html`, không dùng mô
  hình dựng sẵn nào ngoài ba cây dừa nêu ở mục 2.
- **Tám bức vẽ huy hiệu** trên bảng bản đồ là SVG viết tay trong `index.html`.

---

## 6. Phần cố ý KHÔNG đưa vào kho này

Cảnh này trên trang cá nhân của tác giả (`jemappellehuong.com/trangvien.html`)
có một đoạn trích 15 giây bài «Mekong Sunfire» trong bảng khu Âm nhạc. Bản thu
ấy **đồng sở hữu giữa Đỗ Thùy Hương và Phan Anh Tú**, nên đã được loại khỏi kho
này để tác phẩm lưu trữ tại đây là của một tác giả duy nhất. Bảng âm nhạc ở đây
dẫn về trang nhạc trên trang cá nhân thay vì nhúng tệp.

Cùng lý do, thư viện nhạc trong `assets/js/music.js` đã rút từ 34 bài xuống còn
hai bản nhạc nền của khuôn viên; các bài khác nghe ở trang nhạc.
