import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRightAlt,
  ExpandMore,
  Palette,
  Language,
  Shield,
  AccountBalance,
} from "@mui/icons-material";
import { ArrowRight, ArrowLeft, Globe2, Users } from "lucide-react";

const FadeSection = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="z-10 relative"
  >
    {children}
  </motion.div>
);

const ArtTokenization = () => {
  const [artworkDetails, setArtworkDetails] = useState(true);

  // Function to render an accurate token distribution chart
  const renderTokenDistributionChart = () => {
    const totalColumns = 10;
    const totalRows = 10;
    const soldPercentage = 75;

    // Calculate how many cells should be filled
    const totalCells = totalColumns * totalRows;
    const filledCells = Math.round((soldPercentage / 100) * totalCells);

    // Create the grid cells
    const cells = [];
    let cellCounter = 0;

    for (let row = 0; row < totalRows; row++) {
      for (let col = 0; col < totalColumns; col++) {
        cellCounter++;
        cells.push(
          <div
            key={`${row}-${col}`}
            className={`h-3 rounded-sm ${
              cellCounter <= filledCells ? "bg-[#00A86B]" : "bg-[#001a12]/60"
            }`}
          />
        );
      }
    }

    return cells;
  };

  return (
    <div className="bg-gradient-to-b from-[#050505] to-[#0a0a0a] text-white min-h-screen relative overflow-hidden font-sans">
      {/* Enhanced Layered Background Elements */}
      
      {/* Grid Background */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMxMGI5ODEiIHN0cm9rZS13aWR0aD0iMC42Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiBvcGFjaXR5PSIwLjE1Ii8+PC9zdmc+')]"></div>
      
      {/* Hexagonal pattern overlay */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDg0IDQ4Ij48ZGVmcz48cGF0dGVybiBpZD0iaGV4IiB3aWR0aD0iODQiIGhlaWdodD0iNDgiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InNjYWxlKDAuMTYpIj48cGF0aCBkPSJNNDIgMTIgNzMuODIzIDMxIDczLjgyMyA2OSA0MiA4OCAxMC4xNzcgNjkgMTAuMTc3IDMxeiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEuOCIgLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjaGV4KSIgb3BhY2l0eT0iMC4xODc1IiAvPjwvc3ZnPg==')] opacity-60"></div>

      {/* Diagonal grid overlay */}
      <div className="fixed inset-0 opacity-[0.225] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRpYWdvbmFsLWdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTYwIDAgTDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZGlhZ29uYWwtZ3JpZCkiIG9wYWNpdHk9IjEiLz48L3N2Zz4=')]"></div>

      {/* Animated gradient overlay */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-tr from-emerald-900/[0.1875] via-transparent to-blue-900/[0.1875]"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(6,78,59,0.15) 0%, rgba(0,0,0,0) 50%, rgba(12,74,110,0.15) 100%)",
            "linear-gradient(135deg, rgba(12,74,110,0.15) 0%, rgba(0,0,0,0) 50%, rgba(6,78,59,0.15) 100%)",
            "linear-gradient(135deg, rgba(6,78,59,0.15) 0%, rgba(0,0,0,0) 50%, rgba(12,74,110,0.15) 100%)"
          ]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      
      {/* Sophisticated noise texture overlay */}
      <div className="fixed inset-0 opacity-[0.09] mix-blend-soft-light bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuMDEiIG51bU9jdGF2ZXM9IjUiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]"></div>
      
      {/* Circuit board pattern overlay */}
      <div className="fixed inset-0 opacity-[0.225] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJjaXJjdWl0IiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTEwIDEwIEw1MCAxMCBMNTAgNTAgTDkwIDUwIEw5MCA5MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTBiOTgxIiBzdHJva2Utd2lkdGg9IjEuMzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik05MCAxMCBMNTAgMTAgTDUwIDUwIEwxMCA1MCBMMTAgOTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEwYjk4MSIgc3Ryb2tlLXdpZHRoPSIxLjM1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIyLjYyNSIgZmlsbD0iIzEwYjk4MSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iMTAiIHI9IjIuNjI1IiBmaWxsPSIjMTBiOTgxIi8+PGNpcmNsZSBjeD0iOTAiIGN5PSIxMCIgcj0iMi42MjUiIGZpbGw9IiMxMGI5ODEiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjUwIiByPSIyLjYyNSIgZmlsbD0iIzEwYjk4MSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjIuNjI1IiBmaWxsPSIjMTBiOTgxIi8+PGNpcmNsZSBjeD0iOTAiIGN5PSI1MCIgcj0iMi42MjUiIGZpbGw9IiMxMGI5ODEiLz48Y2lyY2xlIGN4PSIxMCIgY3k9IjkwIiByPSIyLjYyNSIgZmlsbD0iIzEwYjk4MSIvPjxjaXJjbGUgY3g9IjkwIiBjeT0iOTAiIHI9IjIuNjI1IiBmaWxsPSIjMTBiOTgxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2NpcmN1aXQpIi8+PC9zdmc+')]"></div>
      
      {/* Vignette shadow overlay */}
      <div className="fixed inset-0 pointer-events-none bg-radial-gradient opacity-[0.225] z-[1]" 
        style={{ background: "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.15) 70%, rgba(0, 0, 0, 0.375) 100%)" }}>
      </div>
      
      {/* Optional color tint */}
      <div className="fixed inset-0 bg-emerald-500/[0.0375] mix-blend-overlay"></div>

      {/* Content sections continue from here */}
      {/* Hero Section */}
      <section className="relative container mx-auto px-6 py-24">
        <FadeSection>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 text-left pt-8">
            {/* Content Section - Left */}
            <div className="relative w-full md:w-1/2 z-10 md:-mt-20">
              <div className="font-orbitron font-bold text-3xl sm:text-4xl md:text-5xl mb-6 text-center md:text-left">
                {/* Mobile layout */}
                <div className="block lg:hidden space-y-1">
                  <div className="flex flex-wrap justify-center md:justify-start">
                    {"Art".split("").map((char, i) => (
                      <span key={`sm-line1-${i}`} className="gradient-letter">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}{" "}
                    {"Tokenization".split("").map((char, i) => (
                      <span key={`sm-line1b-${i}`} className="gradient-letter">{char}</span>
                    ))}
        </div>
      </div>

                {/* Desktop layout */}
                <div className="hidden lg:block space-y-1">
                  <div className="flex flex-wrap justify-start">
                    {"Art Tokenization".split("").map((char, i) => (
                      <span key={`lg-line1-${i}`} className="gradient-letter">
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
            </div>
          </div>
              </div>

              <p className="text-base md:text-lg text-[#CCCCCC] leading-relaxed font-futuristic text-center md:text-left">
                <Globe2 className="inline-block w-5 h-5 text-[#00A86B] mr-2 mb-1" />
                <span className="text-[#00A86B] font-semibold">Transform</span> art ownership through blockchain technology, making 
                <span className="text-[#00A86B] font-medium"> valuable art</span> accessible to global investors for 
                <span className="text-[#00A86B] font-semibold"> fractional ownership</span>.
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                <button className="bg-[#00A86B]/10 backdrop-blur-lg text-[#00A86B] px-8 py-3 rounded-full font-medium transition-all border border-[#00A86B]/50 shadow-[0_0_15px_rgba(0,168,107,0.2)] hover:shadow-[0_0_25px_rgba(0,168,107,0.4)] hover:bg-[#00A86B]/20 hover:scale-105">
                  Start Tokenizing Art
                </button>
                <button className="bg-[#001a12]/10 backdrop-blur-lg text-[#DDFFDD] px-8 py-3 rounded-full font-medium transition-all border border-[#00A86B]/30 shadow-[0_0_15px_rgba(0,168,107,0.1)] hover:shadow-[0_0_25px_rgba(0,168,107,0.2)] hover:bg-[#001a12]/20 hover:scale-105">
                  Learn More
                </button>
              </div>
              </div>

            {/* Art GLB Section Placeholder - Right */}
            <div className="relative w-full md:w-1/2 flex items-start justify-center md:justify-start md:-mt-20">
              <div className="w-[450px] md:w-[600px] h-[450px] md:h-[600px] md:ml-0 flex items-center justify-center">
                <Palette className="w-48 h-48 text-[#00A86B]/50 animate-pulse" />
              </div>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* Features & Artwork */}
      <section className="relative container mx-auto px-6 py-20">
        <FadeSection>
          <div className="py-16">
            <div className="container mx-auto px-4 md:px-12">
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:w-1/2 mb-10 lg:mb-0">
                  <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
                    {["Revolutionize", "Art", "Investment"].map((word, wordIndex) => (
                      <span key={`word-${wordIndex}`} className="flex flex-wrap">
                        {word.split("").map((char, i) => (
                          <span
                            key={`char-${i}`}
                            className="gradient-letter"
                          >
                            {char}
                          </span>
                        ))}
                        <span className="w-2" />
                      </span>
                    ))}
                  </h2>
                  <p className="text-[#CCCCCC] mb-6">
                    Empower your art investment strategy with fractional ownership and blockchain technology
                  </p>

                  <div className="flex flex-col gap-6">
                    {/* Feature Card 1 */}
                    <div className="bg-[#001a12]/30 backdrop-blur-md border border-[#00A86B]/20 p-6 rounded-2xl transition-all hover:bg-[#001a12]/40">
                      <div className="text-[#00A86B] mb-4">
                        <Palette fontSize="large" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-[#DDFFDD]">Fractional Art Ownership</h3>
                      <p className="text-[#CCCCCC]">
                        Invest in high-value art pieces with lower entry barriers
                      </p>
                    </div>

                    {/* Feature Card 2 */}
                    <div className="bg-[#001a12]/30 backdrop-blur-md border border-[#00A86B]/20 p-6 rounded-2xl transition-all hover:bg-[#001a12]/40">
                      <div className="text-[#00A86B] mb-4">
                        <Shield fontSize="large" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-[#DDFFDD]">Provenance Verification</h3>
                      <p className="text-[#CCCCCC]">
                        Blockchain-backed authenticity and ownership tracking
                      </p>
                    </div>

                    {/* Feature Card 3 */}
                    <div className="bg-[#001a12]/30 backdrop-blur-md border border-[#00A86B]/20 p-6 rounded-2xl transition-all hover:bg-[#001a12]/40">
                      <div className="text-[#00A86B] mb-4">
                        <Language fontSize="large" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-[#DDFFDD]">Global Art Market</h3>
                      <p className="text-[#CCCCCC]">
                        Access international art investments seamlessly
                      </p>
                    </div>
                  </div>
                </div>

                {/* Featured Art Card */}
                <div className="lg:w-1/2 lg:pl-10">
                  <div className="bg-[#001a12]/30 backdrop-blur-md border border-[#00A86B]/20 rounded-2xl overflow-hidden">
                    <div className="relative">
                      <div className="bg-gradient-to-r from-[#004b2f] to-[#00A86B] p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-2xl font-bold text-[#DDFFDD]">Digital Horizon</h3>
                            <p className="text-[#CCCCCC]">
                              Elena Rodriguez • Digital Art NFT
                            </p>
                          </div>
                          <div className="flex">
                            <button className="bg-[#001a12]/30 backdrop-blur-lg p-2.5 rounded-full border border-[#00A86B]/30 transition-all hover:bg-[#001a12]/40 hover:scale-105 shadow-[0_0_15px_rgba(0,168,107,0.1)] hover:shadow-[0_0_25px_rgba(0,168,107,0.2)]">
                              <ArrowLeft className="w-5 h-5 text-[#00A86B]" />
                            </button>
                            <button className="bg-[#001a12]/30 backdrop-blur-lg p-2.5 rounded-full border border-[#00A86B]/30 transition-all hover:bg-[#001a12]/40 hover:scale-105 shadow-[0_0_15px_rgba(0,168,107,0.1)] hover:shadow-[0_0_25px_rgba(0,168,107,0.2)] ml-2">
                              <ArrowRight className="w-5 h-5 text-[#00A86B]" />
                            </button>
                          </div>
              </div>
            </div>

                      <div className="p-6 bg-[#001a12]/30 backdrop-blur-md">
                        <div className="grid grid-cols-3 gap-4 mb-8">
                <div>
                            <p className="text-[#999999] text-sm">Artwork Value</p>
                            <p className="text-lg flex items-center">
                              <span className="text-[#00A86B] mr-1">$</span>1.2M
                            </p>
                </div>
                <div>
                            <p className="text-[#999999] text-sm">Total Tokens</p>
                            <p className="text-lg flex items-center">
                              <span className="text-[#00A86B] mr-1">#</span>12,000
                            </p>
                </div>
                <div>
                            <p className="text-[#999999] text-sm">Investors</p>
                            <p className="text-lg flex items-center">
                              <span className="text-[#00A86B] mr-1">👤</span>420
                            </p>
                </div>
              </div>

                        <div className="mb-4">
                          <div className="flex justify-between mb-2">
                            <p className="text-[#999999]">Token Distribution</p>
                            <p className="text-[#DDFFDD]">
                              Token Price{" "}
                              <span className="text-[#00A86B]">$100</span>
                            </p>
                </div>

                          {/* Token Distribution Chart */}
                          <div className="grid grid-cols-10 gap-1 mb-1">
                            {renderTokenDistributionChart()}
                </div>

                          <div className="flex justify-between mt-1">
                            <p className="text-sm text-[#00A86B]">75% Sold</p>
                            <p className="text-sm text-[#999999]">25% Available</p>
                </div>
              </div>

                        <button
                          className="flex justify-between items-center w-full bg-[#001a12]/20 backdrop-blur-lg border border-[#00A86B]/30 hover:bg-[#001a12]/30 p-3 rounded-full transition-all shadow-[0_0_15px_rgba(0,168,107,0.1)] hover:shadow-[0_0_25px_rgba(0,168,107,0.2)]"
                  onClick={() => setArtworkDetails(!artworkDetails)}
                        >
                          <span className="font-medium text-[#00A86B] ml-4">Artwork Details</span>
                          <ExpandMore
                            className={`transform transition-transform text-[#00A86B] ${artworkDetails ? "rotate-180" : ""}`}
                          />
                        </button>

                {artworkDetails && (
                          <div className="bg-[#001a12]/30 -mt-4 mb-4 p-4 rounded-b-md">
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <p className="text-[#999999] text-sm">
                                  Art Style
                                </p>
                                <p className="text-[#DDFFDD]">Digital Abstract</p>
                              </div>
                              <div>
                                <p className="text-[#999999] text-sm">
                        Expected Returns
                                </p>
                                <p className="text-[#DDFFDD]">7.5% annual</p>
                              </div>
                    </div>

                    <div>
                              <p className="text-[#999999] text-sm mb-2">
                        Tokenization Benefits
                              </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                                  <span className="text-[#00A86B] mr-2">→</span>
                                  <span className="text-[#DDFFDD]">
                            Fractional ownership starting from $100
                                  </span>
                        </li>
                        <li className="flex items-start">
                                  <span className="text-[#00A86B] mr-2">→</span>
                                  <span className="text-[#DDFFDD]">
                            Secondary market trading
                                  </span>
                        </li>
                        <li className="flex items-start">
                                  <span className="text-[#00A86B] mr-2">→</span>
                                  <span className="text-[#DDFFDD]">
                                    Verified authenticity and provenance
                                  </span>
                        </li>
                        <li className="flex items-start">
                                  <span className="text-[#00A86B] mr-2">→</span>
                                  <span className="text-[#DDFFDD]">
                            Transparent ownership records
                                  </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                        <button className="w-full bg-[#00A86B]/10 backdrop-blur-lg py-3 px-6 rounded-full font-medium flex items-center justify-center transition-all border border-[#00A86B]/50 shadow-[0_0_15px_rgba(0,168,107,0.2)] hover:shadow-[0_0_25px_rgba(0,168,107,0.4)] hover:bg-[#00A86B]/20 hover:scale-105">
                          <span className="text-[#00A86B]">View Investment Opportunity</span>
                          <ArrowRightAlt className="ml-2 text-[#00A86B]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeSection>
      </section>

      {/* Tokenizable Art Types Section */}
      <section className="relative container mx-auto px-6 py-20">
        <FadeSection>
          <div className="py-16">
            <div className="container mx-auto px-4 md:px-12 text-center">
              <h2 className="font-orbitron text-xl sm:text-3xl md:text-4xl font-bold mb-6">
                <div className="flex flex-wrap justify-center gap-1">
                  {"Tokenizable Art Types".split(" ").map((word, wordIndex) => (
                    <span key={`assets-word-${wordIndex}`} className="flex">
                      {word.split("").map((char, i) => (
                        <span
                          key={`assets-letter-${wordIndex}-${i}`}
                          className="gradient-letter"
                        >
                          {char}
                        </span>
                      ))}
                      <span className="w-1" />
                    </span>
                  ))}
                </div>
              </h2>
              <p className="text-[#CCCCCC] mb-10 max-w-2xl mx-auto">
                Explore the diverse range of art assets available for tokenization
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                <button className="bg-[#001a12]/10 backdrop-blur-lg border border-[#00A86B]/30 hover:bg-[#001a12]/20 text-[#DDFFDD] px-6 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(0,168,107,0.1)] hover:shadow-[0_0_25px_rgba(0,168,107,0.2)] hover:scale-105">
                  Fine Art Paintings
                </button>
                <button className="bg-[#001a12]/10 backdrop-blur-lg border border-[#00A86B]/30 hover:bg-[#001a12]/20 text-[#DDFFDD] px-6 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(0,168,107,0.1)] hover:shadow-[0_0_25px_rgba(0,168,107,0.2)] hover:scale-105">
                  Digital Art NFTs
                </button>
                <button className="bg-[#001a12]/10 backdrop-blur-lg border border-[#00A86B]/30 hover:bg-[#001a12]/20 text-[#DDFFDD] px-6 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(0,168,107,0.1)] hover:shadow-[0_0_25px_rgba(0,168,107,0.2)] hover:scale-105">
                  Sculptures
                </button>
                <button className="bg-[#001a12]/10 backdrop-blur-lg border border-[#00A86B]/30 hover:bg-[#001a12]/20 text-[#DDFFDD] px-6 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(0,168,107,0.1)] hover:shadow-[0_0_25px_rgba(0,168,107,0.2)] hover:scale-105">
                  Photography Collections
                </button>
                <button className="bg-[#001a12]/10 backdrop-blur-lg border border-[#00A86B]/30 hover:bg-[#001a12]/20 text-[#DDFFDD] px-6 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(0,168,107,0.1)] hover:shadow-[0_0_25px_rgba(0,168,107,0.2)] hover:scale-105">
                  Rare Collectibles
                </button>
              </div>
        </div>
      </div>
        </FadeSection>
      </section>

      {/* Final CTA Section */}
      <section className="relative container mx-auto px-6 py-20">
        <FadeSection>
          <div className="py-16">
            <div className="container mx-auto px-4 md:px-12 text-center">
              <h2 className="font-orbitron text-xl sm:text-3xl md:text-4xl font-bold mb-6">
                <div className="flex flex-wrap justify-center gap-1">
                  {"Ready to Invest in".split(" ").map((word, wordIndex) => (
                    <span key={`cta-word-1-${wordIndex}`} className="flex">
                      {word.split("").map((char, i) => (
                        <span
                          key={`cta-letter-1-${wordIndex}-${i}`}
                          className="gradient-letter"
                        >
                          {char}
                        </span>
                      ))}
                      <span className="w-1" />
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-1 mt-2">
                  {"Tokenized Art?".split(" ").map((word, wordIndex) => (
                    <span key={`cta-word-2-${wordIndex}`} className="flex">
                      {word.split("").map((char, i) => (
                        <span
                          key={`cta-letter-2-${wordIndex}-${i}`}
                          className="gradient-letter"
                        >
                          {char}
                        </span>
                      ))}
                      <span className="w-1" />
                    </span>
                  ))}
                </div>
              </h2>
              <p className="text-[#CCCCCC] mb-8 max-w-2xl mx-auto">
                Join a new era of art investment with transparent, accessible, and fractional ownership
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-[#00A86B]/10 backdrop-blur-lg text-[#00A86B] px-8 py-3 rounded-full font-medium transition-all border border-[#00A86B]/50 shadow-[0_0_15px_rgba(0,168,107,0.2)] hover:shadow-[0_0_25px_rgba(0,168,107,0.4)] hover:bg-[#00A86B]/20 hover:scale-105">
            Start Investing
                </button>
                <button className="bg-[#001a12]/10 backdrop-blur-lg text-[#DDFFDD] px-8 py-3 rounded-full font-medium transition-all border border-[#00A86B]/30 shadow-[0_0_15px_rgba(0,168,107,0.1)] hover:shadow-[0_0_25px_rgba(0,168,107,0.2)] hover:bg-[#001a12]/20 hover:scale-105">
            Learn More
                </button>
              </div>
        </div>
      </div>
        </FadeSection>
      </section>
      
      <style jsx global>{`
        .gradient-letter {
          @apply text-transparent bg-clip-text inline-block transition-all duration-300 bg-gradient-to-b from-[#00FFAA] via-[#00A86B] to-[#007d4f];
          animation: pulse-green 5s infinite;
        }
        
        @keyframes pulse-green {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default ArtTokenization;
