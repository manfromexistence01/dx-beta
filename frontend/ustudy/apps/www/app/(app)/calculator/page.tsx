import type { NextPage } from "next"

import Component from "@/components/specialty-page/component"
// import FrameComponent from "@/components/specialty-page/frame-component"
import FrameComponent from "@/components/calculator/page"
export function Rank() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800">
            <th className="px-4 py-3 text-left font-medium text-gray-700 dark:text-gray-300">Player Name</th>
            <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">Score</th>
            <th className="px-4 py-3 text-right font-medium text-gray-700 dark:text-gray-300">Rank</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-100">John Doe</td>
            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">1250</td>
            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">1</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-100">Jane Smith</td>
            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">1100</td>
            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">2</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-100">Bob Johnson</td>
            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">950</td>
            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">3</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-100">Alice Williams</td>
            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">850</td>
            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">4</td>
          </tr>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <td className="px-4 py-3 text-left font-medium text-gray-900 dark:text-gray-100">Tom Wilson</td>
            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">750</td>
            <td className="px-4 py-3 text-right text-gray-900 dark:text-gray-100">5</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Calculator: NextPage = () => {
  return (
    <div className="calculator">
      <FrameComponent />
      {/* <Rank /> */}
    </div>
  )
}

export default Calculator;
// import Footer from "../components/footer";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1CSEqayEExy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

// const SpecialtyPage: NextPage = () => {
//   return (
//     <div className="relative box-border flex w-full flex-col items-start justify-start overflow-hidden bg-black px-0 pb-3.5 pt-0 leading-[normal] tracking-[normal]">
//       {/* <Header /> */}
//       <FrameComponent />
//       <section className="font-headings-desktop-poppins-16px-bold box-border flex w-[1398px] max-w-full flex-row items-start justify-center px-5 pb-[62px] pt-0 text-center text-xl text-blueviolet-200 mq1050:box-border mq1050:pb-10 mq750:box-border mq750:pb-[26px]">
//         <div className="flex w-[1042px] max-w-full flex-col items-end justify-start gap-[81px] mq1050:gap-[40px] mq750:gap-[20px]">
//           <div className="box-border flex max-w-full flex-row items-start justify-end self-stretch py-0 pl-0 pr-0.5">
//             <div className="flex max-w-full flex-1 flex-row flex-wrap items-end justify-start gap-[77px] mq1050:gap-[38px] mq750:gap-[19px]">
//               <div className="flex min-w-[314px] max-w-full flex-1 flex-col items-start justify-start gap-[41px] mq750:gap-[20px]">
//                 <button className="border-dimgray box-border flex w-[122px] cursor-pointer flex-row items-start justify-start gap-[9px] rounded-21xl border-DEFAULT border-solid bg-black px-[18px] py-1.5">
//                   <div className="border-dimgray relative box-border hidden h-[35px] w-[122px] rounded-21xl border-DEFAULT border-solid bg-black" />
//                   <img
//                     className="relative z-[1] h-[19px] min-h-[19px] w-[15px] shrink-0 overflow-hidden"
//                     alt=""
//                     src="/srfilter.svg"
//                   />
//                   <div className="flex flex-col items-start justify-start px-0 pb-0 pt-px">
//                     <div className="font-headings-desktop-poppins-16px-bold text-dimgray relative z-[1] inline-block min-w-[39px] text-left text-xs font-medium">
//                       Filters
//                     </div>
//                   </div>
//                 </button>
//                 <div className="box-border flex max-w-full flex-row items-start justify-start self-stretch py-0 pl-[3px] pr-0">
//                   <Component
//                     rectangle14230="/rectangle-14230@2x.png"
//                     rectangle14231="/rectangle-14231@2x.png"
//                     srHearth="/srhearth.svg"
//                   />
//                 </div>
//               </div>
//               <Component
//                 rectangle14230="/rectangle-14230-1@2x.png"
//                 rectangle14231="/rectangle-14231-1@2x.png"
//                 srHearth="/srhearth-1.svg"
//                 propMinWidth="312px"
//               />
//             </div>
//           </div>
//           <div className="flex max-w-full flex-col items-end justify-start gap-[53px] self-stretch mq750:gap-[26px]">
//             <div className="flex max-w-full flex-row flex-wrap items-start justify-start gap-[77px] self-stretch mq1050:gap-[38px] mq750:gap-[19px]">
//               <Component
//                 rectangle14230="/rectangle-14230-2@2x.png"
//                 rectangle14231="/rectangle-14231-2@2x.png"
//                 srHearth="/srhearth-2.svg"
//                 propMinWidth="312px"
//               />
//               <Component
//                 rectangle14230="/rectangle-14230-3@2x.png"
//                 rectangle14231="/rectangle-14231-3@2x.png"
//                 srHearth="/srhearth-3.svg"
//                 propMinWidth="312px"
//               />
//             </div>
//             <div className="flex flex-row items-start justify-center self-stretch py-0 pl-[29px] pr-5">
//               <div className="flex w-[210px] flex-row items-start justify-start gap-[15px]">
//                 <div className="relative flex-1 font-medium leading-[16px] mq450:text-base mq450:leading-[13px]">
//                   See all universities
//                 </div>
//                 <img
//                   className="relative size-5 shrink-0 overflow-hidden"
//                   alt=""
//                   src="/sr-chevron-down.png"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* <Footer /> */}
//     </div>
//   )
// }

// export default SpecialtyPage