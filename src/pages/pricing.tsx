import "../app/styles/globals.css";
import "../app/styles/pricing.css";
import Footer from '@/app/footer';
import Header from '@/app/header';

export default function Pricing() {
  
    return (
      <div>
        <br></br>
        <Header />
        {/* Centered Page Title & Subtitle */}
        <div className="py-24 text-center bg-white">
          <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest">Pricing</h1>
          <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto"></div>
          <h2 className="uppercase max-w-sm mx-auto font-heading font-light tracking-widest text-gray-500">
          All prints are exclusively printed on premium Fuji Lustre E6 paper.
          <div>
            <table>
                <caption>A-la-carte pricing</caption>
                <thead>
                    <tr>
                        <th scope="col">Size</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <td>* We ship picture perfect prints directly to your address.</td>
                        <th></th>
                    </tr>
                    <tr>
                        <td>** Enlargements are only sold with separate frame and pricing does not include artwork.</td>
                        <th></th>
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <th scope="row">Hourly Photography</th>
                        <td>$300</td>
                    </tr>
                    <tr>
                        <th scope="row">24x36 E6 Enlargement**</th>
                        <td>$245</td>
                    </tr>
                    <tr>
                        <th scope="row">16x24 E6 Enlargement**</th>
                        <td>$195</td>
                    </tr>
                    <tr>
                        <th scope="row">Hourly Artwork</th>
                        <td>$125</td>
                    </tr>
                    <tr>
                        <th scope="row">11x14 E6 Enlargement**</th>
                        <td>$115</td>
                    </tr>
                    <tr>
                        <th scope="row">8x10 E6 Print *</th>
                        <td>$75</td>
                    </tr>
                    <tr>
                        <th scope="row">6k Digital File</th>
                        <td>$45</td>
                    </tr>
                    <tr>
                        <th scope="row">5x7 E6 Print *</th>
                        <td>$35</td>
                    </tr>
                    <tr>
                        <th scope="row">4k Digital File</th>
                        <td>$25</td>
                    </tr>
                    <tr>
                        <th scope="row">4x6 E6 Print *</th>
                        <td>$10</td>
                    </tr>
                </tbody>
            </table>
          </div>
          </h2>
        </div>
        <Footer />
      </div>
    );
}
