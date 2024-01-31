const Formula = () => {
  return (
    <div className="px-44 mb-10">
      <div>
        <h1 className="text-3xl font-extrabold text-center p-2">Formula</h1>
        <div className="border border-black border-1 mt-2">
          <p className="font-extrabold p-2">
            Nilai SPM<sub>max</sub>
            <span>=</span> Nilai Availability (80%) + Nilai Performance(10%) +
            Nilai Maintenance(10%)
          </p>
        </div>
        <p className="mt-2">
          Rumus Yang digunakan dalam Perhitungan SLA Network availability atau
          ketersediaan layanan adalah sebagaimana berikut :
        </p>
        <div className="mt-2">
          <p className="italic">
            Nilai Availability = 1 -{" "}
            <math xmlns="http://www.w3.org/1998/Math/MathML">
              <mfrac>
                <mrow>
                  <mi>SPM Availability</mi>
                  <mo>+</mo>
                  <mi>Availability Aktual</mi>
                </mrow>
                <mi>SPM Availability</mi>
              </mfrac>
            </math>
          </p>
        </div>
        <div className="mt-2">
          <p className="italic">
            Availability Aktual ={" "}
            <math xmlns="http://www.w3.org/1998/Math/MathML">
              <mrow>
                <mo>(</mo>
                <mfrac>
                  <mi>Up Time</mi>
                  <mi>total time of month</mi>
                </mfrac>
                <mo>)</mo>
                <mo>&#x00D7;</mo>
                <mn>100</mn>
                <mo>%</mo>
              </mrow>
            </math>
          </p>
        </div>
        <p>Dimana : </p>
        <div className="px-10">
          Uptime adalah durasi jaringan beroperasi (tidak mati) dalam 1 bulan.
          total time of month waktu dalam 1 bulan sebagaimana tabel berikut ini
          : table xxxx. Daftar waktu perbulan Kalender.
        </div>
        <div className="mt-2">
          <table className="table-auto border text-center">
            <thead className="border">
              <tr>
                <th className="border">Jumlah Hari Per Bulan</th>
                <th className="border">Jumlah Jam Per Bulan</th>
                <th className="border">Jumlah Menit Per Bulan</th>
                <th className="border">Jumlah Detik Per Bulan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border">28</td>
                <td className="border">672</td>
                <td className="border">40.320</td>
                <td className="border">2.419.200</td>
              </tr>
              <tr>
                <td className="border">29</td>
                <td className="border">696</td>
                <td className="border">31.760</td>
                <td className="border">1.905.600</td>
              </tr>
              <tr>
                <td className="border">30</td>
                <td className="border">720</td>
                <td className="border">43.200</td>
                <td className="border">2.592.000</td>
              </tr>
              <tr>
                <td className="border">31</td>
                <td className="border">744</td>
                <td className="border">44.460</td>
                <td className="border">2.667.600</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <h1 className="font-bold text-2xl">.Troughput</h1>
          <div className="px-10 italic border-black border-2 w-fit p-4 mt-2 mx-auto">
            <span className="font-bold">Troughput </span>={" "}
            <math xmlns="http://www.w3.org/1998/Math/MathML">
              <mfrac>
                <mrow>
                  <mi>Packet receive (kb)</mi>
                </mrow>
                <mi>Time transmited (s)</mi>
              </mfrac>
            </math>
          </div>
          <table className="mt-4 table-auto text-center w-full">
            <thead className="border">
              <tr>
                <th className="border">Kategori Troughput</th>
                <th className="border">Troughput</th>
                <th className="border">Index</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border">Bad</td>
                <td className="border">0 - 338 kbps</td>
                <td className="border">0</td>
              </tr>
              <tr>
                <td className="border">Poor</td>
                <td className="border">338 - 700 kbps</td>
                <td className="border">0</td>
              </tr>
              <tr>
                <td className="border">Fair</td>
                <td className="border">700 - 1200 kbps</td>
                <td className="border">0</td>
              </tr>
              <tr>
                <td className="border">Good</td>
                <td className="border">1200 kbps - 2,1 Mbps</td>
                <td className="border">0</td>
              </tr>
              <tr>
                <td className="border">Exelent</td>
                <td className="border"> &gt; 2,1Mbps</td>
                <td className="border">0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <h1 className="font-bold text-2xl">.Packet Loss</h1>
          <div className="px-10 italic border-black border-2 w-fit p-4 mt-2 mx-auto">
            <span className="font-bold">Packet Loss</span> ={" "}
            <math xmlns="http://www.w3.org/1998/Math/MathML">
              <mfrac>
                <mrow>
                  <mi>(Time transmited - Packet receive)</mi>
                </mrow>
                <mi>Time transmited (s)</mi>
              </mfrac>
              <mo>&#x00D7;</mo>
              <mn>100</mn>
              <mo>%</mo>
            </math>
          </div>
          <table className="mt-4 table-auto text-center w-full">
            <thead className="border">
              <tr>
                <th className="border">Kategori Packet Loss</th>
                <th className="border">Packet Loss</th>
                <th className="border">Index</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border">Poor</td>
                <td className="border">&gt; 25%</td>
                <td className="border">1</td>
              </tr>
              <tr>
                <td className="border">Medium</td>
                <td className="border">12 - 24%</td>
                <td className="border">2</td>
              </tr>
              <tr>
                <td className="border">Good</td>
                <td className="border">3 - 14%</td>
                <td className="border">3</td>
              </tr>
              <tr>
                <td className="border">Perfect</td>
                <td className="border">0 - 2%</td>
                <td className="border">4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <h1 className="font-bold text-2xl">.Jitter</h1>
          <table className="mt-4 table-auto text-center w-full">
            <thead className="border">
              <tr>
                <th className="border">Kategori Jitter</th>
                <th className="border">Jitter</th>
                <th className="border">Index</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border">Poor</td>
                <td className="border">125 - 255 ms</td>
                <td className="border">1</td>
              </tr>
              <tr>
                <td className="border">Medium</td>
                <td className="border">75 - 125 ms</td>
                <td className="border">2</td>
              </tr>
              <tr>
                <td className="border">Good</td>
                <td className="border">0 - 75 ms</td>
                <td className="border">3</td>
              </tr>
              <tr>
                <td className="border">Perfect</td>
                <td className="border">0 ms</td>
                <td className="border">4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <h1 className="font-bold text-2xl">.Latency</h1>
          <table className="mt-4 table-auto text-center w-full">
            <thead className="border">
              <tr>
                <th className="border">Kategori latency</th>
                <th className="border">latency</th>
                <th className="border">Index</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border">Poor</td>
                <td className="border">&gt; 450 s</td>
                <td className="border">1</td>
              </tr>
              <tr>
                <td className="border">Medium</td>
                <td className="border">300 - 450 s</td>
                <td className="border">2</td>
              </tr>
              <tr>
                <td className="border">Good</td>
                <td className="border">150 - 300 s</td>
                <td className="border">3</td>
              </tr>
              <tr>
                <td className="border">Perfect</td>
                <td className="border">&lt; 150 s</td>
                <td className="border">4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Formula;
