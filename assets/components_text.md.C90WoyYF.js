import{_ as i,c as a,ae as t,o as e}from"./chunks/framework.Cx07iRtk.js";const c=JSON.parse('{"title":"Text","description":"","frontmatter":{},"headers":[],"relativePath":"components/text.md","filePath":"components/text.md"}'),n={name:"components/text.md"};function p(h,s,l,o,r,d){return e(),a("div",null,s[0]||(s[0]=[t(`<h1 id="text" tabindex="-1">Text <a class="header-anchor" href="#text" aria-label="Permalink to &quot;Text&quot;">​</a></h1><p>The <strong>Text</strong> component is a wrapper for Material-UI&#39;s <code>Typography</code> that provides an easy way to render text with different styles and variants.</p><p>This component wraps Material-UI’s <code>Typography</code> component and allows you to easily control the text&#39;s style by specifying the variant you need.</p><h2 id="importing" tabindex="-1">Importing <a class="header-anchor" href="#importing" aria-label="Permalink to &quot;Importing&quot;">​</a></h2><p>Each component in this boilerplate can be imported from the <code>components</code> project as a named reference.</p><h3 id="example" tabindex="-1">Example: <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example:&quot;">​</a></h3><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Text } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;components&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>Ensure your <code>package.json</code> references the <code>components</code> project and that the version matches.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;components&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Here’s a simple example of using the <code>Text</code> wrapper:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Text } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;components&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Text</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> variant</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;h4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;This is a heading&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MyApp;</span></span></code></pre></div><h3 id="component-api" tabindex="-1">Component API <a class="header-anchor" href="#component-api" aria-label="Permalink to &quot;Component API&quot;">​</a></h3><h4 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h4><ul><li><strong><code>variant</code></strong>: <em>(optional)</em> The typography variant to apply to the text. It can be one of the following: <ul><li><code>&quot;h1&quot;</code>, <code>&quot;h2&quot;</code>, <code>&quot;h3&quot;</code>, <code>&quot;h4&quot;</code>, <code>&quot;h5&quot;</code>, <code>&quot;h6&quot;</code>: Heading variants.</li><li><code>&quot;subtitle1&quot;</code>, <code>&quot;subtitle2&quot;</code>: Subtitle variants.</li><li><code>&quot;body1&quot;</code>, <code>&quot;body2&quot;</code>: Body text variants.</li><li><code>&quot;caption&quot;</code>, <code>&quot;overline&quot;</code>, <code>&quot;button&quot;</code>, <code>&quot;inherit&quot;</code>: Other text styles (e.g., captions, overlines, or inherited styles).</li></ul></li><li><strong><code>children</code></strong>: <em>(required)</em> The text content to render inside the <code>Typography</code> component.</li><li><strong><code>props</code></strong>: Any other props passed to the <code>Text</code> will be forwarded to the Material-UI <code>Typography</code> component.</li></ul><h4 id="example-with-custom-variant" tabindex="-1">Example with Custom Variant <a class="header-anchor" href="#example-with-custom-variant" aria-label="Permalink to &quot;Example with Custom Variant&quot;">​</a></h4><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Text } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;components&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Text</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> variant</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;h2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Main Title&lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Text</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> variant</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;body1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        This is a paragraph of body text, styled with the &quot;body1&quot; variant.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> MyApp;</span></span></code></pre></div><p>In this example, different typography variants are used for the title and body text.</p><h2 id="notes" tabindex="-1">Notes <a class="header-anchor" href="#notes" aria-label="Permalink to &quot;Notes&quot;">​</a></h2><ul><li><strong>Typography Variants</strong>: The <code>variant</code> prop determines the style of the text. You can choose from a variety of predefined Material-UI typography styles.</li><li><strong>Custom Content</strong>: The <code>children</code> prop is required and represents the content to be displayed inside the <code>Typography</code> component.</li></ul><hr><p>For more details, check out the <a href="https://mui.com/material-ui/react-typography/" target="_blank" rel="noreferrer">Material-UI Typography documentation</a>.</p>`,23)]))}const E=i(n,[["render",p]]);export{c as __pageData,E as default};
