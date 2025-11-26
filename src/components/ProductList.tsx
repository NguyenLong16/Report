import { useAppDispatch } from "../hooks/useRedux";
import { SanPham, themSanPhamVaoGioHang } from "../redux/slice/cartSlice";

const sanPhamMau: SanPham[] = [
    { id: 1, ten: "Áo Thun Nam", gia: 150000 },
    { id: 2, ten: "Quần Jeans Nữ", gia: 300000 },
    { id: 3, ten: "Giày Thể Thao", gia: 500000 },
];

const ProductList = () => {
    const dispatch = useAppDispatch();

    const handleAddToCart = (sanPham: SanPham) => {
        dispatch(themSanPhamVaoGioHang(sanPham));
    };

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sanPhamMau.map((sp) => (
                <div key={sp.id} className="w-64 rounded-lg shadow-md border p-4 bg-white">
                    <h3 className="text-lg font-semibold text-gray-800">{sp.ten}</h3>

                    <p className="text-gray-500 mt-1">
                        Giá:{" "}
                        <span className="font-bold text-blue-600">
                            {sp.gia.toLocaleString("vi-VN")}₫
                        </span>
                    </p>

                    <button
                        onClick={() => handleAddToCart(sp)}
                        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-500 active:scale-95 transition"
                    >
                        Thêm vào giỏ
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
