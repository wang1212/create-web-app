/* eslint-disable sonarjs/no-duplicate-string */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/**
 * @see https://github.com/GoogleChrome/web-vitals#readme
 * @see https://w3c.github.io/navigation-timing/#the-performancetiming-interface
 */
import { ReportHandler } from 'web-vitals';

// eslint-disable-next-line sonarjs/cognitive-complexity
const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // eslint-disable-next-line no-console
    const isConsoleLog = onPerfEntry === console.log;

    import('web-vitals')
      .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        // * see https://web.dev/cls/
        getCLS((metric) => {
          if (metric.value <= 0.1) {
            // eslint-disable-next-line no-console
            console.log(
              '%c%s',
              'color: green',
              [`[Performance] Cumulative Layout Shift(${metric.name}): `, `${parseFloat(metric.value).toFixed(2)}(<= 0.1, Good)`].join('')
              // metric
            );
          } else if (metric.value <= 0.25) {
            // eslint-disable-next-line no-console
            console.log(
              '%c%s',
              'color: orange',
              [`[Performance] Cumulative Layout Shift(${metric.name}): `, `${parseFloat(metric.value).toFixed(2)}(0.1 ~ 0.25, Improve)`].join('')
              // metric
            );
          } else {
            // eslint-disable-next-line no-console
            console.log(
              '%c%s',
              'color: red',
              [`[Performance] Cumulative Layout Shift(${metric.name}): `, `${parseFloat(metric.value).toFixed(2)}(> 0.25, Poor)`].join('')
              // metric
            );
          }

          if (!isConsoleLog) {
            onPerfEntry(metric);
          }
        }, true);

        // * see https://web.dev/fid/
        getFID((metric) => {
          if (metric.value <= 100) {
            // eslint-disable-next-line no-console
            console.log(
              '%c%s',
              'color: green',
              [`[Performance] First Input Delay(${metric.name}): `, `${parseFloat(metric.value).toFixed(2)}ms(<= 100ms, Good)`].join('')
              // metric
            );
          } else if (metric.value <= 300) {
            // eslint-disable-next-line no-console
            console.log(
              '%c%s',
              'color: orange',
              [`[Performance] First Input Delay(${metric.name}): `, `${parseFloat(metric.value).toFixed(2)}ms(100ms ~ 300ms, Improve)`].join('')
              // metric
            );
          } else {
            // eslint-disable-next-line no-console
            console.log(
              '%c%s',
              'color: red',
              [`[Performance] First Input Delay(${metric.name}): `, `${parseFloat(metric.value).toFixed(2)}ms(> 300ms, Poor)`].join('')
              // metric
            );
          }

          if (!isConsoleLog) {
            onPerfEntry(metric);
          }
        }, true);

        // * see https://web.dev/fcp/
        getFCP((metric) => {
          if (metric.value <= 1800) {
            // eslint-disable-next-line no-console
            console.log(
              '%c%s',
              'color: green',
              [`[Performance] First Contentful Paint(${metric.name}): `, `${parseFloat(metric.value).toFixed(2)}ms(<= 1.8s, Good)`].join('')
              // metric
            );
          } else if (metric.value <= 3000) {
            // eslint-disable-next-line no-console
            console.log(
              '%c%s',
              'color: orange',
              [`[Performance] First Contentful Paint(${metric.name}): `, `${parseFloat(metric.value).toFixed(2)}ms(1.8s ~ 3s, Improve)`].join('')
              // metric
            );
          } else {
            // eslint-disable-next-line no-console
            console.log(
              '%c%s',
              'color: red',
              [`[Performance] First Contentful Paint(${metric.name}): `, `${parseFloat(metric.value).toFixed(2)}ms(> 3s, Poor)`].join('')
              // metric
            );
          }

          if (!isConsoleLog) {
            onPerfEntry(metric);
          }
        }, true);

        // * see https://web.dev/lcp/
        getLCP((metric) => {
          if (metric.value <= 2500) {
            // eslint-disable-next-line no-console
            console.log(
              '%c%s',
              'color: green',
              [`[Performance] Largest Contentful Paint(${metric.name}): `, `${parseFloat(metric.value).toFixed(2)}ms(<= 2.5s, Good)`].join('')
              // metric
            );
          } else if (metric.value <= 4000) {
            // eslint-disable-next-line no-console
            console.log(
              '%c%s',
              'color: orange',
              [`[Performance] Largest Contentful Paint(${metric.name}): `, `${parseFloat(metric.value).toFixed(2)}ms(2.5s ~ 4s, Improve)`].join('')
              // metric
            );
          } else {
            // eslint-disable-next-line no-console
            console.log(
              '%c%s',
              'color: red',
              [`[Performance] Largest Contentful Paint(${metric.name}): `, `${parseFloat(metric.value).toFixed(2)}ms(> 4s, Poor)`].join('')
              // metric
            );
          }

          if (!isConsoleLog) {
            onPerfEntry(metric);
          }
        }, true);

        getTTFB((metric) => {
          // eslint-disable-next-line no-console
          console.log('------------------------');
          // * https://w3c.github.io/navigation-timing/#dom-performancetiming-domainlookupend
          // eslint-disable-next-line no-console
          console.log(
            '%c%s',
            'color: green',
            [
              `[Performance] Domain Lookup End(DNS): `,
              `${parseFloat(metric.entries[0].domainLookupEnd).toFixed(2)}ms`,
              `(take ${parseFloat(metric.entries[0].domainLookupEnd - metric.entries[0].domainLookupStart).toFixed(2)}ms)`,
            ].join('')
          );
          // * https://w3c.github.io/navigation-timing/#dom-performancetiming-connectend
          // eslint-disable-next-line no-console
          console.log(
            '%c%s',
            'color: green',
            [
              `[Performance] Connect End(TCP/SSL/SOCKS): `,
              `${parseFloat(metric.entries[0].connectEnd).toFixed(2)}ms`,
              `(take ${parseFloat(metric.entries[0].connectEnd - metric.entries[0].connectStart).toFixed(2)}ms)`,
            ].join('')
          );
          // * https://w3c.github.io/navigation-timing/#dom-performancetiming-requeststart
          // eslint-disable-next-line no-console
          console.log('%c%s', 'color: green', [`[Performance] Request Start: `, `${parseFloat(metric.entries[0].requestStart).toFixed(2)}ms`].join(''));
          // * https://w3c.github.io/navigation-timing/#dom-performancetiming-responsestart
          // eslint-disable-next-line no-console
          console.log(
            '%c%s',
            'color: green',
            [
              `[Performance] Response Start: `,
              `${parseFloat(metric.value).toFixed(2)}ms`,
              `(take ${parseFloat(metric.value - metric.entries[0].requestStart).toFixed(2)}ms)`,
            ].join('')
          );
          // * https://web.dev/time-to-first-byte/
          // eslint-disable-next-line no-console
          console.log(
            '%c%s',
            'color: green',
            [`[Performance] Time to First Byte(${metric.name}): `, `${parseFloat(metric.value).toFixed(2)}ms`].join('')
            // metric
          );
          // * https://w3c.github.io/navigation-timing/#dom-performancetiming-responseend
          // eslint-disable-next-line no-console
          console.log(
            '%c%s',
            'color: green',
            [
              `[Performance] Response End: `,
              `${parseFloat(metric.entries[0].responseEnd).toFixed(2)}ms`,
              `(take ${parseFloat(metric.entries[0].responseEnd - metric.entries[0].requestStart).toFixed(2)}ms)`,
            ].join('')
          );
          // * https://w3c.github.io/navigation-timing/#dom-performancetiming-dominteractive
          // eslint-disable-next-line no-console
          console.log(
            '%c%s',
            'color: green',
            [
              `[Performance] domInteractive: `,
              `${parseFloat(metric.entries[0].domInteractive).toFixed(2)}ms`,
              metric.entries[0].domLoading && `(take ${parseFloat(metric.entries[0].domInteractive - metric.entries[0].domLoading).toFixed(2)}ms)`,
            ]
              .filter(Boolean)
              .join('')
          );
          // * https://w3c.github.io/navigation-timing/#dom-performancetiming-domcontentloadedeventend
          // eslint-disable-next-line no-console
          console.log(
            '%c%s',
            'color: green',
            [
              `[Performance] DOMContentLoaded Event End: `,
              `${parseFloat(metric.entries[0].domContentLoadedEventEnd).toFixed(2)}ms`,
              `(take ${parseFloat(metric.entries[0].domContentLoadedEventEnd - metric.entries[0].domContentLoadedEventStart).toFixed(2)}ms)`,
            ].join('')
          );
          // * https://w3c.github.io/navigation-timing/#dom-performancetiming-domcomplete
          // eslint-disable-next-line no-console
          console.log(
            '%c%s',
            'color: green',
            [
              `[Performance] domComplete: `,
              `${parseFloat(metric.entries[0].domComplete).toFixed(2)}ms`,
              `(take ${parseFloat(metric.entries[0].domComplete - metric.entries[0].domInteractive).toFixed(2)}ms)`,
            ].join('')
          );
          // * https://w3c.github.io/navigation-timing/#dom-performancetiming-loadeventend
          // eslint-disable-next-line no-console
          console.log(
            '%c%s',
            'color: green',
            [
              `[Performance] Load Event End: `,
              `${parseFloat(metric.entries[0].loadEventEnd).toFixed(2)}ms`,
              `(take ${parseFloat(metric.entries[0].loadEventEnd - metric.entries[0].loadEventStart).toFixed(2)}ms)`,
            ].join('')
          );
          // eslint-disable-next-line no-console
          console.log(
            '%c%s',
            'color: green',
            [`[Performance] Blank screen time: `, `${parseFloat(metric.entries[0].domInteractive - metric.entries[0].fetchStart).toFixed(2)}ms`].join('')
          );
          // eslint-disable-next-line no-console
          console.log(
            '%c%s',
            'color: green',
            [`[Performance] First screen time: `, `${parseFloat(metric.entries[0].domContentLoadedEventEnd - metric.entries[0].fetchStart).toFixed(2)}ms`].join(
              ''
            )
          );
          // eslint-disable-next-line no-console
          console.log('------------------------');

          if (!isConsoleLog) {
            onPerfEntry(metric);
          }
        });
      })
      .catch(() => {});
  }
};

export default reportWebVitals;
