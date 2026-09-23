"use client";

import { Check, Copy, Heart } from "lucide-react";
import { useState } from "react";

const bankDetails = {
  bankName: "BANK NAME",
  accountName: "PNEUMA ANOINTED MINISTRY",
  accountNumber: "0000000000",
};

export default function Giving() {
  const [copied, setCopied] = useState(false);

  async function copyAccountNumber() {
    try {
      await navigator.clipboard.writeText(bankDetails.accountNumber);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section
      id="give"
      className="bg-[#f7f4ee] px-6 py-24 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          {/* Introduction */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#b08d57]">
              Giving
            </p>

            <div className="mt-6 h-px w-16 bg-[#b08d57]" />

            <h2 className="mt-8 font-[var(--font-cormorant)] text-5xl leading-[1.05] text-[#171614] sm:text-6xl">
              Give as an expression of worship.
            </h2>

            <p className="mt-8 max-w-md text-base leading-8 text-[#24211d]/65">
              Your giving supports the work of the ministry and helps create
              room for the Gospel to reach, establish, and transform lives.
            </p>

            <div className="mt-10 flex items-center gap-3 text-sm text-[#24211d]/50">
              <Heart size={17} className="text-[#b08d57]" />
              Thank you for partnering with PAM.
            </div>
          </div>

          {/* Bank details */}
          <div>
            <div className="border border-[#24211d]/10 bg-white">
              <div className="border-b border-[#24211d]/10 px-6 py-5 sm:px-8">
                <p className="text-xs uppercase tracking-[0.25em] text-[#24211d]/45">
                  Bank Transfer
                </p>
              </div>

              <div className="px-6 py-8 sm:px-8 sm:py-10">
                <div className="grid gap-7">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#24211d]/40">
                      Bank
                    </p>

                    <p className="mt-2 font-[var(--font-cormorant)] text-2xl text-[#171614]">
                      {bankDetails.bankName}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#24211d]/40">
                      Account Name
                    </p>

                    <p className="mt-2 font-[var(--font-cormorant)] text-2xl text-[#171614]">
                      {bankDetails.accountName}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#24211d]/40">
                      Account Number
                    </p>

                    <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="font-mono text-2xl tracking-wider text-[#171614]">
                        {bankDetails.accountNumber}
                      </p>

                      <button
                        type="button"
                        onClick={copyAccountNumber}
                        className="inline-flex items-center justify-center gap-2 border border-[#24211d]/15 px-4 py-3 text-sm font-medium text-[#171614] transition hover:border-[#b08d57] hover:text-[#b08d57]"
                      >
                        {copied ? (
                          <>
                            <Check size={16} />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy size={16} />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#24211d]/10 bg-[#ede8de] px-6 py-5 sm:px-8">
                <p className="text-xs leading-6 text-[#24211d]/50">
                  Please verify the account details before making a transfer.
                  Official giving details will be displayed here once
                  confirmed by the ministry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}