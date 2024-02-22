import { request } from "./request";

export interface MerchantListItem {
  merchantAccout: string;
  merchantName: string;
  merchantCash: string;
}

export async function queryMerchantInfo() {
  return request<{
    success: boolean;
    result: MerchantListItem[];
  }>("/api/queryMerchantInfo", {
    method: "GET",
  });
}
