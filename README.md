## react-misc

Miscellaneous React components which I often use in my applications

### CenterLayout

<details>

#### Summary

Center content inside it's parent container using [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

#### Usage

```js
import { CenterLayout } from 'react-misc';
```

```html
<CenterLayout
  {/* flex parent */}
  direction="row|row-reverse|column|column-reverse"
  stretch={boolean}

  {/* flex child */}
  minWidth={string|number}
  maxWidth={string|number}
  minHeight={string|number}
  maxHeight={string|number}
  grow={boolean|number}
  shrink={boolean|number}
  basis={string|number}
>
  {children}
</CenterLayout>
```

| Name | Default Value | Description |
| -- | -- | -- |
| direction | 'row' | [Flex direction](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-3) |
| stretch | false | If the item should be stretched over the cross axis |
| minWidth, maxWidth, minHeight, maxHeight | 0, none, 0, none | Min / max dimensions of the centered element |
| grow, shrink, basis | false, false, 'auto' | [Flex grow](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-10), [shrink](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-11) and [basis](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-12) |

</details>

### FlowLayout

<details>

#### Summary

Order content in a horizontal or vertical flow using [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

#### Usage

```js
import { FlowLayout } from 'react-misc';
```

```html
<FlowLayout
  direction="row|row-reverse|column|column-reverse"
  wrap={boolean|'wrap|nowrap|wrap-reverse'}
  justifyContent="flex-start|flex-end|center|space-between|space-around|space-evenly"
  alignContent="flex-start|flex-end|center|space-between|space-around|stretch"
  stretch={boolean}
>
  <FlowLayout.Item
    grow={boolean|number}
    shrink={boolean|number}
    basis={string|number}
  >
    {children}
  </FlowLayout.Item>
</CenterLayout>
```

##### \<FlowLayout\>
| Name | Default Value | Description |
| -- | -- | -- |
| direction, wrap, justifyContent, alignContent | 'column', false, 'flex-start', 'center' | [Flex direction](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-3), [wrap](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-4), [justifyContent](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-6) and [alignContent](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-8) |
| stretch | true | If the items should be stretched over the cross axis |

##### \<FlowLayout.Item\>
| Name | Default Value | Description |
| -- | -- | -- |
| grow, shrink, basis | false, false, 'auto' | [Flex grow](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-10), [shrink](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-11) and [basis](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-12) |

</details>

### HttpError

<details>

#### Summary

Display basic error messages for a selection of HTTP status codes using [React Intl](https://github.com/yahoo/react-intl/wiki)

#### Usage

You need to wrap this component into an `<IntlProvider>`.
You can use custom translations for your language. Please look at [src/components/HttpError/messages.js](https://github.com/aaronburmeister/react-misc/blob/master/src/components/HttpError/messages.js) for the supported message types.

```js
import { HttpError } from 'react-misc';
```

```html
<HttpError code={number} />
```

```js
HttpError.humanize(data: number|object, fieldName: string)
```

##### \<HttpError\>
| Name | Default Value | Description |
| -- | -- | -- |
| code | undefined | HTTP status code |

The message for code 500 is displayed by default if the provided one is invalid or unsupported.

##### HttpError.humanize

| Name | Default Value | Description |
| -- | -- | -- |
| data | undefined | HTTP status code or error object |
| fieldName | 'code' | The field to get the code from if data is an object |

Returns `null` if `data` is falsy, an `<HttpError>` otherwise.

</details>

### ShadowCompound

<details>

#### Summary

Wraps the component inside a container which takes up the same space using [react-measure](https://www.npmjs.com/package/react-measure). This is helpful for fixed elements which overlay the body (e.g. navigation bars).

#### Usage

Children are handled using [react-resolve-element](https://www.npmjs.com/package/react-resolve-element).
Please look at [The concept](https://www.npmjs.com/package/react-resolve-element#the-concept) for information on the supported render methods.

```js
import { Shadowcompound } from 'react-misc';
```

```html
<ShadowCompound
  horizontal={boolean}
  vertical={boolean}

  component={ReactComponent}
  render={function}
>
  {children}
</ShadowCompound>
```

```html
<ShadowCompound.MeasurePuppet
  horizontal={boolean}
  vertical={boolean}
  innerRef={MeasureRef}
/>
```

##### \<ShadowCompound\>
| Name | Default Value | Description |
| -- | -- | -- |
| horizontal | false | If the compound should take over the width of the measure component |
| vertical | false | If the compound should take over the height of the measure component |
| component, render, children | | [Render methods](https://www.npmjs.com/package/react-resolve-element#the-concept) |

The child get's a property `measureRef` which should be supplied to the element which size should be measured.

##### \<ShadowCompound.MeasurePuppet\>
| Name | Default Value | Description |
| -- | -- | -- |
| horizontal | false | If the puppet should fill the parent's width |
| vertical | false | If the puppet should fill the parent's height |
| innerRef | undefined | The measureRef supplied by `<ShadowCompound>` |

This component can be used if the component you want to measure doesn't support ref's. It fills up the parent and hence can be used to measure the component's size.

#### Example

This example shows how to use this component with a navigation bar built with a [Semantic UI React menu](https://react.semantic-ui.com/collections/menu).

```js
class Bar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      measureRef,
      ...props
    } = this.props;

    return (
      <Menu {...props}>
        {/* Measure Puppet */}
        <ShadowCompound.MeasurePuppet vertical innerRef={measureRef} />

        <Menu.Item>Test</Menu.Item>
        <Menu.Item>Authentic Menu Item</Menu.Item>
      </Menu>
    );
  }
}

function Navigation(props) {
  return (
    <ShadowCompound vertical>
      <Bar fixed="top" borderless stackable {...props} />
    </ShadowCompound>
  )
}

function Page() {
  return (
    <div>
      <Navigation />
      This is page content
    </div>
  )
}
```

When you render `<Page>` you should see the navigation bar on top, and `This is page content` message below. You can try to switch the browser resolution between mobile and desktop to see the height change in runtime.

</details>
