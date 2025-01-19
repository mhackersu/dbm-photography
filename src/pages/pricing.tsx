import "../app/styles/globals.css";
import "../app/styles/pricing.css";
import Footer from '@/app/footer';
import Header from '@/app/header';

export default function Pricing() {
  
    return (
      <div>
        <Header />
        {/* Centered Page Title & Subtitle */}
        <div className="py-24 text-center">
          <h1 className="text-4xl text-green-800 font-display uppercase tracking-widest">Pricing</h1>
          <div className="w-full max-w-xs h-px bg-gray-300 my-6 mx-auto"></div>
          <h2 className="uppercase max-w-sm mx-auto font-heading font-light tracking-widest text-gray-500">
          We offer a range of ceremony coverage for your perfect wedding. We use only premium Fuji paper on all prints and enlargements. All frames are custom produced in-lab and mailed directly to your shipping address. We standby our quality 100% and only use the very best archival methods.
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
                        <td>*All prints are printed only on professional Fuji Lustre paper.</td>
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <th scope="row">20x24</th>
                        <td>$125</td>
                    </tr>
                    <tr>
                        <th scope="row">16x24</th>
                        <td>$75</td>
                    </tr>
                    <tr>
                        <th scope="row">11x14</th>
                        <td>$45</td>
                    </tr>
                    <tr>
                        <th scope="row">8x10</th>
                        <td>$25</td>
                    </tr>
                    <tr>
                        <th scope="row">5x7</th>
                        <td>$15</td>
                    </tr>
                    <tr>
                        <th scope="row">4x6</th>
                        <td>$10</td>
                    </tr>
                    <tr>
                        <th scope="row">5x7 Digital Download @600dpi</th>
                        <td>$75</td>
                    </tr>
                    <tr>
                        <th scope="row">4x6 Digital Download @300dpi</th>
                        <td>$25</td>
                    </tr>
                    <tr>
                        <th scope="row">Photography by the hour $250</th>
                        <td>$25</td>
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
