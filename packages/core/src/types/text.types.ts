import { Property } from 'csstype'
import { PropValue } from './common.types'

export interface Texts {
  textAlign?: string | string[]
  textLeft?: boolean
  textCenter?: boolean
  textRight?: boolean
  textJustify?: boolean

  /**
   * Set heading
   *
   * h1
   * ```css
   * {
   *   font-size: 2em;
   *   font-weight: bold;
   * }
   * ```
   *
   * 用 View 作为示例:
   * ```tsx
   * <View h1></View>
   * ```
   */
  heading?: PropValue
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean

  /**
   * Set fontSize
   *
   * f-[xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|number]
   *
   * ```css
   * {
   *   font-size: number;
   * }
   * ```
   *
   * 用 View 作为示例:
   * ```tsx
   * <View f-xs></View>
   * ```
   */
  f?: PropValue

  fontWeight?: PropValue
  fontHairline?: boolean
  fontThin?: boolean
  fontLight?: boolean
  fontNormal?: boolean
  fontMedium?: boolean
  fontSemibold?: boolean
  fontBold?: boolean
  fontExtrabold?: boolean

  lh?: PropValue

  lhNone?: boolean
  lhTight?: boolean
  lhSnug?: boolean
  lhNormal?: boolean
  lhRelaxed?: boolean
  lhLoose?: boolean

  normalcase?: boolean
  uppercase?: boolean
  lowercase?: boolean
  capitalize?: boolean

  color?: Property.Color | Property.Color[]

  colorBrand?: boolean

  colorPrimary?: boolean

  colorSecondary?: boolean

  colorInfo?: boolean

  colorWarning?: boolean

  colorError?: boolean

  colorSuccess?: boolean
}