import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { xoaSanPhamKhoiGioHang } from "../redux/slice/cartSlice";

const CartStatus = () => {
    const { danhSachSanPham, tongSoLuong } = useAppSelector((state) => state.khoGioHang);
    const dispatch = useAppDispatch();

    return (
        <div className="w-[28rem] bg-white shadow-md border rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Giỏ hàng <span className="text-blue-600">({tongSoLuong} sản phẩm)</span>
            </h2>

            <ul className="space-y-3">
                {danhSachSanPham.length === 0 && (
                    <p className="text-gray-500">Giỏ hàng đang trống...</p>
                )}

                {danhSachSanPham.map((sp) => (
                    <li
                        key={sp.id}
                        className="flex items-center justify-between bg-gray-50 border rounded-md p-3"
                    >
                        <div>
                            <p className="font-medium text-gray-800">{sp.ten}</p>
                            <p className="text-sm text-gray-500">
                                {sp.gia.toLocaleString("vi-VN")}₫
                            </p>
                        </div>

                        <button
                            onClick={() => dispatch(xoaSanPhamKhoiGioHang(sp.id))}
                            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-400 active:scale-95 transition"
                        >
                            Xóa
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CartStatus;
