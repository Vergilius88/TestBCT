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

interface SpecialOptionsProps {
  offerName: string;
  optionName: string;
  optionValue: number;
}

interface OffersProps {
  offersData: OfferProps[];
  dataForGraphic?: Object[];
  specialOptions: SpecialOptionsProps[];
  storageVolume: string;
  transferVolume: string;
}
const initialState: OffersProps = {
  offersData: testData,
  dataForGraphic: [],
  specialOptions: [],
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
    setDataForGraphic: (state, data: PayloadAction<[]>) => {
      state.dataForGraphic = data.payload;
    },
    setSpecialOptions: (state, data: PayloadAction<SpecialOptionsProps>) => {
      if (
        state.specialOptions.find((i) => i.offerName !== data.payload.offerName)
      ) {
        state.specialOptions = [...state.specialOptions, ...[data.payload]];
      } else
        state.specialOptions = state.specialOptions.map((i) => {
          if (i.offerName === data.payload.offerName) {
            return (i = data.payload);
          } else {
            return i;
          }
        });
    },
  },
});

export const {
  setStorageVolume,
  setTransferVolume,
  setDataForGraphic,
  setSpecialOptions,
} = offersSlice.actions;

export default offersSlice.reducer;
