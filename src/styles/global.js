import { Platform, StyleSheet } from 'react-native';

export const BG_COLOR = '#343336';
export const BAR_COLOR = '#4E4D52';
export const TEXT_COLOR = '#E5DBDA';
export const HEADER_TEXT_COLOR = '#FFFFFF';
export const MUTED_COLOR = '#8E8786';
export const LINK_COLOR = '#48E9D9';
export const ACCENT_COLORS = [
    '#D31D65',
    '#751C53',
    '#C248C0',
    '#7D6E8B',
    '#BBC6F7'
];

export const COMMON_STYLES = StyleSheet.create({
    text: {
        color: TEXT_COLOR,
    },
    pageContainer: {
        flex: 1,
        marginHorizontal: 0,
        backgroundColor: BG_COLOR
    }
});