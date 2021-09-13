import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <nav className="navbar">
      <label className="navbar-toggle" id="js-navbar-toggle">
              <i className="fa fa-bars"></i>
          </label>
      <a href="#" className="logo">logo</a>
      <input type="checkbox" id="chkToggle"></input>
      <ul className="main-nav" id="js-menu">
        <li>
          <a href="#" className="nav-links">Home</a>
        </li>
        <li>
          <a href="#" className="nav-links">Products</a>
        </li>
        <li>
          <a href="#" className="nav-links">About Us</a>
        </li>
        <li>
          <a href="#" className="nav-links">Contact Us</a>
        </li>
        <li>
          <a href="#" className="nav-links">Blog</a>
        </li>
      </ul>
    </nav>
    <div className="content">
    <h1>Lorem Ipsum</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere arcu vitae tortor fringilla, suscipit ornare nunc pretium. Praesent sodales pretium ex, ac faucibus libero pretium vel. Fusce sit amet lacus quam. Donec aliquet ultricies magna, eget bibendum purus faucibus ac. Nulla facilisi. Vestibulum posuere, quam id convallis feugiat, arcu urna egestas nunc, at semper neque lorem ac risus. Praesent ultrices massa at dolor porttitor, ac ultricies nulla tincidunt. Donec dignissim ante non velit luctus, sed euismod leo mollis. Praesent nec tempor nunc, in volutpat sem. Sed suscipit tempus arcu hendrerit maximus. Aliquam porttitor, ipsum et ultrices porttitor, nibh massa dapibus arcu, in ultricies risus libero id libero. Suspendisse placerat vehicula dolor, non egestas nisl. Nulla facilisi. In mollis nisl vitae ex feugiat commodo. Vivamus enim justo, pretium feugiat magna sit amet, sagittis mattis ante. Pellentesque ultrices dolor volutpat felis luctus tempor.</p>

    <p>Suspendisse fringilla lectus ut felis commodo eleifend. Aenean magna nisi, ullamcorper in ante ultrices, rutrum venenatis dolor. Aliquam ullamcorper pulvinar risus ut mollis. Nunc sed lectus nec nisl blandit dictum. Aliquam ut finibus tellus, nec pellentesque leo. Pellentesque ultrices felis in ante consectetur, a lacinia purus gravida. Nulla a arcu sed orci mattis rhoncus eu in diam. Donec a eleifend odio, ut pharetra erat. Duis id odio odio.</p>

    <p>Praesent tincidunt justo tortor, vel placerat risus varius ornare. Mauris fermentum leo posuere imperdiet tincidunt. Cras eget commodo turpis, non facilisis orci. Nam imperdiet aliquam nibh, eu pharetra ipsum dignissim eu. Aliquam erat volutpat. Aliquam quis quam tempus, luctus nibh quis, aliquet massa. Suspendisse augue ipsum, blandit non efficitur in, pellentesque ac justo. Nunc at elit a augue dapibus ultrices vitae a purus. Cras ultricies vel nibh sit amet efficitur. Quisque lacinia sem quis tortor dignissim pharetra. Quisque lobortis auctor tellus id ullamcorper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse vel odio vel tortor mollis consequat ac vel lectus. Sed et nisi eget dui luctus convallis.</p>

    <p>Proin nec arcu justo. Nullam fringilla fringilla porttitor. Mauris commodo purus sit amet rutrum venenatis. Nullam euismod id purus et dignissim. Fusce tincidunt imperdiet ipsum eu bibendum. Sed sollicitudin ut ante eget rutrum. Praesent et dui dui. Quisque in elit pretium, aliquam magna sit amet, eleifend ligula. Suspendisse aliquet turpis vitae purus laoreet tristique. Sed sodales, velit quis consectetur pharetra, magna nibh sagittis quam, sed placerat odio purus auctor arcu. Suspendisse potenti. Morbi eget suscipit velit, sed ornare sapien. Proin et vulputate ante, quis mollis lorem. Suspendisse sit amet neque vel orci accumsan dictum. Sed suscipit tincidunt odio quis accumsan.</p>

    <p>Vestibulum molestie enim a ex lacinia fermentum. Duis sollicitudin, nisl eget lobortis mollis, ligula eros vehicula massa, sed porttitor felis nisl quis lacus. Phasellus laoreet quis mauris at egestas. Ut cursus vel mi a posuere. Sed suscipit elit ut orci euismod faucibus eu id nunc. Donec augue purus, ornare sed tempor sit amet, posuere feugiat sapien. Integer lobortis ex sed dolor rutrum, pretium pulvinar lectus fermentum. Ut mattis condimentum elit et lacinia. Duis quis metus mauris. Duis sed leo ut ligula convallis accumsan. Duis malesuada non risus id dapibus. Vivamus tellus lacus, elementum eget neque eget, elementum blandit odio. Sed quis mollis libero, et posuere nibh. Fusce ut nibh consectetur, vehicula est et, pellentesque quam.</p>
    </div>
    </>
  )
}
