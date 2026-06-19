# Dao Dung Van — Portfolio

Trang portfolio cá nhân, lấy cảm hứng từ phong cách Apple.

## Cách chạy thử trên máy

```bash
npm install
npm run dev
```

Mở link hiện ra trong terminal (thường là `http://localhost:5173`) để xem trang web.

## Cách build để deploy

```bash
npm run build
```

Lệnh này tạo ra thư mục `dist/` chứa bản web hoàn chỉnh, sẵn sàng để đưa lên hosting.

Cách deploy lên Vercel: đẩy code lên GitHub, sau đó vào Vercel chọn "Import" repo này — Vercel sẽ tự nhận diện và build. Hoặc chạy `npx vercel` để deploy trực tiếp từ máy.

## Trang web có những phần gì

- **Nav** — thanh điều hướng trên cùng
- **Hero** — phần giới thiệu đầu trang
- **About** — giới thiệu bản thân
- **Skills** — danh sách kỹ năng
- **Work** — các sản phẩm/dự án đã làm
- **Contact** — thông tin liên hệ
- **Footer** — chân trang

## Muốn sửa nội dung thì sửa ở đâu

- **Đổi chữ/nội dung**: vào thư mục `src/components/`, mỗi phần của trang có 1 file riêng (ví dụ muốn sửa phần Skills thì mở `src/components/Skills.jsx`).
- **Đổi danh sách kỹ năng / công nghệ dùng**: sửa trong `src/data/skills.js` và `src/data/stack.js`.
- **Đổi màu sắc, font, khoảng cách chung**: sửa trong `src/styles/global.css`.
- **Đổi ảnh đại diện hoặc video Vivudee**: thay file trong `src/assets/` hoặc video trong `public/vivudee.mp4`.

Mỗi phần (Nav, Hero, About...) có 1 file `.jsx` (nội dung/cấu trúc) đi kèm 1 file `.css` (giao diện) cùng tên.
