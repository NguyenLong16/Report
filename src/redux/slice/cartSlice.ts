import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SanPham {
    id: number;
    ten: string;
    gia: number;
}

interface TrangThaiGioHang {
    danhSachSanPham: SanPham[];
    tongSoLuong: number;
}

const initialState: TrangThaiGioHang = {
    danhSachSanPham: [],
    tongSoLuong: 0,
};

const cartSlice = createSlice({
    name: 'quanLyGioHang',
    initialState,
    reducers: {
        themSanPhamVaoGioHang: (state, action: PayloadAction<SanPham>) => {
            const sanPhamMoi = action.payload;

            state.danhSachSanPham.push(sanPhamMoi);
            state.tongSoLuong += 1;
        },

        xoaSanPhamKhoiGioHang: (state, action: PayloadAction<number>) => {
            const idCanXoa = action.payload;

            state.danhSachSanPham = state.danhSachSanPham.filter(
                (sp) => sp.id !== idCanXoa
            );
            state.tongSoLuong = state.danhSachSanPham.length;
        }
    }
});

export const { themSanPhamVaoGioHang, xoaSanPhamKhoiGioHang } = cartSlice.actions;
export default cartSlice.reducer;