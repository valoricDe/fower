import { StyliPlugin, Theme } from '@styli/types'
import * as CSS from 'csstype'

declare const _default: () => StyliPlugin
export default _default

type Fn = (theme: Theme) => CSS.Property.Position | CSS.Property.Position[]

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set position
     *
     * @example
     * ```tsx
     * <View position="absolute"></View>
     * ```
     */
    position?: CSS.Property.Position | CSS.Property.Position[] | Fn

    /**
     * Set position to static
     *
     * @example
     * ```tsx
     * <View static></View>
     * ```
     */
    static?: boolean

    /**
     * Set position to fixed
     *
     * @example
     * ```tsx
     * <View fixed></View>
     * ```
     */
    fixed?: boolean

    /**
     * Set position to absolute
     *
     * @example
     * ```tsx
     * <View absolute></View>
     * ```
     */
    absolute?: boolean

    /**
     * Set position to relative
     *
     * @example
     * ```tsx
     * <View relative></View>
     * ```
     */
    relative?: boolean

    /**
     * Set position to sticky
     *
     * @example
     * ```tsx
     * <View sticky></View>
     * ```
     */
    sticky?: boolean

    /**
     * Set top
     *
     * top-10 is `top: 10px`
     *
     * @example
     * ```tsx
     * <View top-0></View>
     * <View top-10px></View>
     * <View top--10rem></View>
     * ```
     */
    top?: boolean | number | string

    top0?: boolean
    top1?: boolean
    top2?: boolean
    top3?: boolean
    top4?: boolean
    top5?: boolean
    top6?: boolean
    top7?: boolean
    top8?: boolean
    top9?: boolean
    top10?: boolean
    top11?: boolean
    top12?: boolean
    top14?: boolean
    top16?: boolean
    top20?: boolean
    top24?: boolean
    top28?: boolean
    top32?: boolean
    top36?: boolean
    top40?: boolean
    top44?: boolean
    top48?: boolean
    top52?: boolean
    top56?: boolean
    top60?: boolean
    top64?: boolean
    top72?: boolean
    top80?: boolean
    top96?: boolean

    /**
     * Set right
     *
     * right-10 is `right: 10px`
     *
     * @example
     * ```tsx
     * <View right-0></View>
     * <View right-10px></View>
     * <View right--10rem></View>
     * ```
     */
    right?: boolean | number | string

    right0?: boolean
    right1?: boolean
    right2?: boolean
    right3?: boolean
    right4?: boolean
    right5?: boolean
    right6?: boolean
    right7?: boolean
    right8?: boolean
    right9?: boolean
    right10?: boolean
    right11?: boolean
    right12?: boolean
    right14?: boolean
    right16?: boolean
    right20?: boolean
    right24?: boolean
    right28?: boolean
    right32?: boolean
    right36?: boolean
    right40?: boolean
    right44?: boolean
    right48?: boolean
    right52?: boolean
    right56?: boolean
    right60?: boolean
    right64?: boolean
    right72?: boolean
    right80?: boolean
    right96?: boolean

    /**
     * Set bottom
     *
     * bottom-10 is `bottom: 10px`
     *
     * @example
     * ```tsx
     * <View bottom-0></View>
     * <View bottom-10px></View>
     * <View bottom--10rem></View>
     * ```
     */
    bottom?: boolean | number | string

    bottom0?: boolean
    bottom1?: boolean
    bottom2?: boolean
    bottom3?: boolean
    bottom4?: boolean
    bottom5?: boolean
    bottom6?: boolean
    bottom7?: boolean
    bottom8?: boolean
    bottom9?: boolean
    bottom10?: boolean
    bottom11?: boolean
    bottom12?: boolean
    bottom14?: boolean
    bottom16?: boolean
    bottom20?: boolean
    bottom24?: boolean
    bottom28?: boolean
    bottom32?: boolean
    bottom36?: boolean
    bottom40?: boolean
    bottom44?: boolean
    bottom48?: boolean
    bottom52?: boolean
    bottom56?: boolean
    bottom60?: boolean
    bottom64?: boolean
    bottom72?: boolean
    bottom80?: boolean
    bottom96?: boolean

    /**
     * Set left
     *
     * left-10 is `left: 10px`
     *
     * @example
     * ```tsx
     * <View left-0></View>
     * <View left-10px></View>
     * <View left--10rem></View>
     * ```
     */
    left?: boolean | number | string

    left0?: boolean
    left1?: boolean
    left2?: boolean
    left3?: boolean
    left4?: boolean
    left5?: boolean
    left6?: boolean
    left7?: boolean
    left8?: boolean
    left9?: boolean
    left10?: boolean
    left11?: boolean
    left12?: boolean
    left14?: boolean
    left16?: boolean
    left20?: boolean
    left24?: boolean
    left28?: boolean
    left32?: boolean
    left36?: boolean
    left40?: boolean
    left44?: boolean
    left48?: boolean
    left52?: boolean
    left56?: boolean
    left60?: boolean
    left64?: boolean
    left72?: boolean
    left80?: boolean
    left96?: boolean
  }
}
