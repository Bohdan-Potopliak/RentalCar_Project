import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBrands = createAsyncThunk('brands/fetchBrands', async () => {
    const { data } = await axios.get('https://car-rental-api.goit.global/brands');
    return data;
});
