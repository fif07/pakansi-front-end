import React from "react";

import Button from "../elements/Button";
import IconText from "../parts/IconText";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350 }}>
            <IconText />
            <p className="brand-tagline">
              Kita akan buat liburanmu indahmu secara instan dan berkesan.
            </p>
          </div>
          <div className="col-auto mr-5">
            <h6 className="mt-2">Untuk Pemula</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  Akun Baru
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/properties">
                  Pesan Kamar
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/use-payments">
                  Pembayaran
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-2">Jelajahi Kami</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Tentang
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Kebijakan Privasi
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Syarat & Ketentuan
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Hubungi Kami</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:support@staycation.id"
                >
                  dukung@pakansi.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+62210275737">
                  021 - 1027 - 5735
                </Button>
              </li>
              <li className="list-group-item">
                <span>Pakansi Yok, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center copyrights">
            Hakcipta 2023 • Dilindungi undang - undang • Pakansi
          </div>
        </div>
      </div>
    </footer>
  );
}
