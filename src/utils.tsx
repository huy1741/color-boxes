import { BoxItem } from "./type";

export function isEmpty(obj: BoxItem) {
    return Object.keys(obj).length === 0;
}