import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { testData } from "../../assets/testData/testData";

export interface OfferProps {
  name: string;
  minimumPayment?: number;
  maximumPayment?: number;
  storageCost: number | { name: string; value: number }[];
  transferCost: number;
  freeLimit?: number;
  icon: string;
}

interface OffersProps {
  offersData: OfferProps[];
  finalPrices: Object;
  storageVolume: string;
  transferVolume: string;
}

const initialState: OffersProps = {
  offersData: testData,
  finalPrices: {},
  storageVolume: "0",
  transferVolume: "0",
};

const offersSlice = createSlice({
  name: "offers",
  initialState,
  reducers: {
    setStorageVolume: (state, data: PayloadAction<string>) => {
      state.storageVolume = data.payload;
    },
    setTransferVolume: (state, data: PayloadAction<string>) => {
      state.transferVolume = data.payload;
    },
    setFinalPrices: (state, data: PayloadAction<{}>) => {
      state.finalPrices = { ...state.finalPrices, ...data.payload };
    },
  },
});

export const { setStorageVolume, setTransferVolume, setFinalPrices } =
  offersSlice.actions;

export default offersSlice.reducer;
