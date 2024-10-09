import { DiBootstrap, DiCss3, DiGithubFull, DiHtml5, DiJsBadge, DiNodejs, DiNpm, } from "react-icons/di"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

import { motion } from "framer-motion";

const Technologies = () => {
  return (
   <div className="py-24">
        <h2 id="technologies" className="my-20 text-center font-semibold text-4xl">Technologies</h2>
        <motion.div className="flex flex-wrap items-center justify-center gap-4"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
            <div className="p-4">
                <DiHtml5 className="text-7xl text-red-700" />
            </div>
            <div className="p-4">
                <DiCss3 className="text-7xl text-sky-600" />
            </div>
            <div>
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </div>
            <div className="p-4">
                <DiJsBadge className="text-7xl text-yellow-300" />
            </div>
            <div className="p-4">
                <DiNodejs className="text-7xl text-green-500" />
            </div>
            <div className="p-4">
                <TbBrandNextjs className="text-7xl text-slate-400" />
            </div>
            <div className="p-4">
                <DiNpm className="text-7xl text-red-600" />
            </div>
            <div className="p-4">
                <SiMongodb className="text-7xl text-green-400" />
            </div>
            <div>
                <DiBootstrap className="text-7xl text-violet-500" />
            </div>
            <div className="p-4">
                <DiGithubFull className="text-7xl text-orange-800" />
            </div>
        </motion.div>
   </div>
  )
}

export default Technologies
