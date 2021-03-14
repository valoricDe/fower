import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * debug
     *
     * Styli will auto add border to self element.
     *
     * debug is `.autoClassName{ border: 1px solid gold }`
     *
     * @example
     * ```tsx
     * <View debug></View>
     * ```
     */
    debug?: boolean | CSSObject

    /**
     * debugChildren
     *
     * Styli will auto add border to self and children element
     *
     * debugChildren is `.autoClassName{ border: 1px solid gold, '> *': { border: 1px solid gold } }`
     *
     * @example
     * ```tsx
     * <View debugChildren></View>
     * ```
     */
    debugChildren?: boolean | CSSObject

    /**
     * debugAll
     *
     * Styli will auto add border to all element.
     *
     * debugAll is `* { border: 1px solid gold }`
     *
     * @example
     * ```tsx
     * <View debugAll></View>
     * ```
     */
    debugAll?: boolean | CSSObject
  }
}
