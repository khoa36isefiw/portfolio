### Portfolio

- Developed by Typescript, NextJS, TailwindCSS, Shadcn

### Client Component NextJS

- Dùng client component khi:
  - Sử dụng "use client" ở component nào muốn nó là client component
  - Cần tương tác với các hooks: useState, useEffect, useRef...
  - Cần tương tác với event handlers: onClick, onSubmit, onChange, onBlue, onFocus...
  - Cần API đến từ trình duyệt:
    - window.localhost
    - window.localstorage
    - window.cookies
    - window.location
    - window.history
- Trong NextJS, mặc định tất cả các component đều được render ra HTML sẵn khi có thể lúc NextJS build (static rendering). Kể cả server component và client component.
- khi truy cập vào trong một trang web nextjs sẽ thấy UI ngay lập tức do server nextjs trả về HTML đã render ra sẵn. ==> Sau đó trình duyệt sẽ render lại component một lần nữa để đồng bộ DOM, events, state, effect.

- Client component bị render tối thiếu ít nhất 2 lần: 1 lần khi build, 1+ lần ở client
- Vì HTML trả về trước HTML sẵn thì người dùng sẽ thấy content ngay lập tức.
- Thấy content trước nhưng không thể tương tác ngay vì phải đợi trình duyệt đồng bộ lại client component (render, gắn sự kiện, state, effect...)

- Ưu điểm:
  - giảm gánh nặng cho server khi component nặng và phức tạp về logic
- Nhược điểm:
  - SEO không tốt
  - Thiết bị client yếu thì nó load lâu, chạy lâu

### Server Component NextJS

- Chế độ mặc định của component trong NextJS
- Ưu điểm:
  - Fetch data ở server ==> Nơi gần data center nên là sẽ nhanh hơn là fetch ở client => giảm thiểu thời gian rendering tăng UX
  - Bảo mật: server cho phép giữ các data nhạy cảm, logic đặc biệt không muốn public ở client.
  - Caching: Vì được render ở phía server nên có thể lưu giữ cache cho nhiều người dùng khác nhau => không cần render trên mỗi request
  - Bundle size: Giảm JS bundle size vì client không cần tải về phần js logic để render HTML
  - Load trang lần đầu nhanh và chỉ số FCP (First Contentful Paint) thấp do người dùng sẽ thấy content ngay lập tức
  - SEO and SES (Social Network Sharebility)

### Kiến trúc MYSQL

### Lấy dữ liệu trong table

#### Lấy dữ liệu

--> Select

#### Lọc dữ liệu

--> Where

#### Sắp xếp dữ liệu

--> Order by

#### Biển đổi dữ liệu

--> Sử dụng các hàm

#### Gom nhóm dữ liệu

--> Sử dụng Group by

#### Lấy dữ liệu từ nhiều bảng

--> Join

### Thêm dữ liệu vào bảng

#### Insert

- thêm 1 bảng dữ liệu mới insert into values (1, "test")
- thêm dữ liệu từ bảng khác insert into test select \* from test;

### Cập nhật dữ liệu

- Update

### Xoá dữ liệu

- Delete
