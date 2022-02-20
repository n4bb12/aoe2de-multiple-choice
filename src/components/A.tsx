import NextjsLink, { LinkProps as NextjsLinkProps } from "next/link"
import { useRouter } from "next/router"
import { AnchorHTMLAttributes, CSSProperties, forwardRef } from "react"

export type AProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  NextjsLinkProps & {
    href: string
    disabled?: boolean
  }

const disabledStyles: CSSProperties = { pointerEvents: "none" }

const appUrlRegExp = /^\w+:/

/**
 * This is a generic unstyled link component that
 * - adds `target="_blank"` on external links
 * - adds `rel="noopener noreferrer"` on external links
 * - forces a plain link if the `download` attribute is present
 * - prepends the current non-default locale to `href` to support opening pages
 * in a new tab with the correct locale using middle-click or the context menu
 * - supports disabling a link by setting `disabled`
 * - ensures anchors lead to the expected page
 */
export const A = forwardRef<HTMLAnchorElement, AProps>(
  (
    {
      children,
      href,
      as,
      replace,
      scroll,
      shallow,
      passHref,
      prefetch,
      locale,
      disabled,
      ...htmlLinkProps
    },
    ref,
  ) => {
    const nextjsLinkProps = {
      href,
      as,
      replace,
      scroll,
      shallow,
      passHref,
      prefetch,
      locale,
    }

    const isAbsolute = href.startsWith("http")
    const isHash = href.startsWith("#")

    // Next.js ignores the download attribute and opens the file instead of
    // downloading it. To force a download we need a regular HTML link.
    const isDownload = !!htmlLinkProps.download

    // e.g. `mailto`, `tel`
    const isAppUrl = appUrlRegExp.test(href)

    // External links should be opened in a new tab and the target page should
    // not have access to the opener window.
    // https://web.dev/external-anchors-use-rel-noopener
    const target = htmlLinkProps.target || (isAbsolute ? "_blank" : undefined)
    const rel =
      htmlLinkProps.rel || (isAbsolute ? "noopener noreferrer" : undefined)

    // Support disabling links by disabling focus and click.
    const style = disabled ? disabledStyles : undefined
    const tabIndex = disabled ? -1 : undefined

    // Next.js only prepends the locale when LEFT-clicking the link.
    // If the link is opened in a new tab, the locale is NOT taken into account.
    const router = useRouter()
    if (
      !isAbsolute &&
      !isHash &&
      !isDownload &&
      !isAppUrl &&
      ((!!locale && locale !== router.defaultLocale) ||
        (!locale && router.locale !== router.defaultLocale))
    ) {
      const targetLocale = locale || router.locale
      if (!href.startsWith(`/${router.locale}/`)) {
        href = "/" + targetLocale + href
      }
    }

    if (isAbsolute || isDownload || isAppUrl) {
      return (
        <a
          {...htmlLinkProps}
          ref={ref}
          href={href}
          style={style}
          tabIndex={tabIndex}
          target={target}
          rel={rel}
        >
          {children}
        </a>
      )
    }

    return (
      <NextjsLink {...nextjsLinkProps}>
        <a
          {...htmlLinkProps}
          ref={ref}
          href={href}
          style={style}
          tabIndex={tabIndex}
        >
          {children}
        </a>
      </NextjsLink>
    )
  },
)

A.displayName = "A"
