export const BUY_CAKE = "BUY_CAKE";
export const BUY_ICECREAM = "BUY_ICECREAM";

export function buycake() {
    return {
        type: BUY_CAKE,
        info: "first action",
    }
}

export function buyIcecream(){
    return {
        type: BUY_ICECREAM,
        info:"second action",
    }
}
