
const lightTheme = {
    ultraWhite: "#FFFFFF",//Background
    softBlack : "#0F1923",// others backgrounds cards
    black: "#000000",// Text
    softBlue: "#70A9E2",//Links
    softGrey: "#F2F2F2",// background cards
    grey: "#E0E0E0",// info text in white background,
    hardGrey: "#828282"
}

const darkTheme = {
    darkBlue: "#0F1923",//Background,
    blue: "#23394F",// others backgrounds cards
    softBlue: "#70A9E2",//Links
    white: "#E5E5E5",// Text
    softGrey: "#F2F2F2",// 
    hardGrey: "#828282",
    grey:"#E0E0E0"
}
export const colorPalette = {
    ...lightTheme,
    ...darkTheme
}
export type palette = keyof typeof colorPalette
