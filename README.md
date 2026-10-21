<div align="center">

# Le Domaine de Hương

### Trang viên tri thức · Knowledge Manor

**Một trang viên 3D chạy thẳng trong trình duyệt, không gọi mạng một lần nào.**
*An interactive 3D estate that runs in the browser and makes no network request at all.*

[![Live](https://img.shields.io/badge/xem_th%E1%BB%AD-tr%E1%BA%A3i_nghi%E1%BB%87m_3D-c45c3a?style=for-the-badge)](https://thuyhuongctu.github.io/Le-Domaine-de-Huong/)
&nbsp;
[![Licence](https://img.shields.io/badge/gi%E1%BA%A5y_ph%C3%A9p-b%E1%BA%A3o_l%C6%B0u_m%E1%BB%8Di_quy%E1%BB%81n-3f6f68?style=for-the-badge)](LICENSE)

</div>

---

## Một phút để hiểu · At a glance

| | |
| --- | --- |
| **Là gì** | Trang viên của một nghiên cứu sinh ở đồng bằng sông Cửu Long, dựng bằng three.js |
| **Tám khu** | Nghiên cứu · Thư viện · Âm nhạc · Lối kể chuyện · Bảng tin · Nhà chính · Đường đèn lồng · Kho tương lai |
| **Bốn thời khắc** | sáng · chiều · đêm · noir — mỗi thời khắc một bộ đèn, sương và khung bóng riêng |
| **Ba phương tiện** | đi bộ · xe đạp · xuồng (xuồng chỉ đi được trên sông) |
| **Hai thứ tiếng** | Tiếng Việt và tiếng Anh, mặc định tiếng Anh, nhớ lựa chọn của khách |
| **Lời dẫn** | thu bằng **giọng thật của tác giả**, cả hai thứ tiếng |
| **Gọi mạng** | **0** — đo bằng Chromium, không một yêu cầu nào ra ngoài sau khi tải |
| **Cần máy chủ?** | Không. Không có bước dựng, không có phần máy chủ. |

---

## Vì sao tách thành kho riêng

Cảnh này cũng chạy trên trang cá nhân của tác giả tại
<https://jemappellehuong.com/trangvien.html>. Kho riêng này tồn tại để **ranh
giới tác phẩm gọn lại**: một tác giả, bốn thành phần bên thứ ba đã kiểm kê đủ,
và không một tệp nào thuộc phần đồng sở hữu với người khác.

Liên kết Zenodo–GitHub lưu trữ ở mức **kho**: mỗi bản phát hành, Zenodo chụp cả
cây tệp rồi cấp DOI cho ảnh chụp ấy. Nếu lưu trữ từ kho trang cá nhân thì bản
ghi sẽ gồm cả hai mươi bản thu nhạc và bốn mươi trang khác — tức gộp vào đúng
những thứ không thuộc tác phẩm này.

Đổi nội dung cảnh thì **phải sửa cả hai bên trong cùng một lần**. Đây là bài học
đã trả giá một lần với văn phòng nghiên cứu: hai bản lệch nhau ba tuần mới phát
hiện.

---

## Trong trang viên có gì

<details>
<summary><b>Tám khu, mỗi khu một dáng riêng</b></summary>

Không khu nào giống khu nào khi nhìn từ xa. Vành bao có thể là vòng tròn, ba
cạnh thẳng chừa lối vào, hoặc bỏ hẳn; và mỗi khu có **một nét dọc riêng** —
tháp vuông, khung chữ A, mái nhà sàn cao, vòm sân khấu, cột cờ, dãy đèn lồng,
cột buồm. Nét dọc là thứ đọc được xa nhất vì nó cắt lên nền trời.

</details>

<details>
<summary><b>Bốn thời khắc ánh sáng</b></summary>

Sáng, chiều, đêm và một chế độ noir. Thước đo là **tỉ lệ đèn phụ trên đèn
chính**, giữ quanh 0,31 cho hai buổi ban ngày — đủ để khối có hình, không bẹt.
Khung bóng chạy theo tầm nhìn chứ không đặt dưới chân nhân vật.

</details>

<details>
<summary><b>Chế độ ngắm toàn cảnh</b></summary>

Phím `C`. Máy quay rời nhân vật, bay một vòng quanh trang viên ở bán kính 104,
ống kính 20°. Khung bóng mở rộng, sương kéo xa, mây cất đi — nếu không thì cả
trang viên chìm trong sương hoặc mất bóng ở phần xa.

</details>

<details>
<summary><b>Xuồng chỉ đi trên sông</b></summary>

Việc xét xuồng có nằm trên nước không dùng chính đa giác mặt sông, không dùng
một công thức chép lại. Thả xuồng thì thả vào giữa dòng; chạm bờ thì lái chệch
dần để lướt dọc bờ.

</details>

<details>
<summary><b>Năm mô-đun trò chơi</b></summary>

Thành tựu, nhiệm vụ phụ, vòng chơi, trò chơi nhỏ và tuyến truyện. Cả năm dựng
chữ bằng JavaScript và **đọc ngôn ngữ ngay lúc vẽ**, nên khách đổi tiếng giữa
chừng thì bảng đang mở vẽ lại đúng.

</details>

---

## Chạy thử tại chỗ

```bash
python3 -m http.server 8000     # rồi mở http://127.0.0.1:8000/
```

Mở thẳng `index.html` bằng trình duyệt cũng chạy, nhưng phục vụ qua HTTP thì
service worker mới hoạt động.

---

## Phần không thuộc tác giả

three.js r128 và GLTFLoader (MIT) · ba mô hình dừa của Kenney (CC0) · cảnh tháp
phái sinh từ ThreeUI của Meng To (MIT) · hai bộ chữ Baloo 2 và Be Vietnam Pro
(SIL OFL 1.1). Kiểm kê đầy đủ kèm nguồn và mức độ chỉnh sửa ở
[`THIRD-PARTY.md`](THIRD-PARTY.md).

## Giấy phép và trích dẫn

Bản quyền © 2026 Đỗ Thùy Hương. Bảo lưu mọi quyền — xem [`LICENSE`](LICENSE).
Công trình công bố để **đọc, tham khảo và trích dẫn**, không phát hành theo
giấy phép mở. Cách trích dẫn ở [`CITATION.cff`](CITATION.cff).

---

<div align="center">
<sub>Đỗ Thùy Hương · nghiên cứu sinh, Trường Kinh tế, Đại học Cần Thơ<br>
<a href="https://jemappellehuong.com/">jemappellehuong.com</a> ·
<a href="https://orcid.org/0000-0002-7711-2487">ORCID</a> ·
contact@jemappellehuong.com</sub>
</div>
