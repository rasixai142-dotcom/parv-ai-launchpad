export const META_PIXEL_ID = "740056559170783";

type Fbq = ((...args: unknown[]) => void) | undefined;

function getFbq(): Fbq {
  if (typeof window === "undefined") return undefined;
  return (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
}

export function trackPixel(event: string, params?: Record<string, unknown>) {
  const fbq = getFbq();
  if (!fbq) return;
  try {
    if (params) fbq("track", event, params);
    else fbq("track", event);
  } catch {
    /* pixel blocked — ignore */
  }
}

export const metaPixelScript = `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`;
