import rikutoImage from '../images/rikutomikado.jpeg'

export default function Hero() {
  return (
    <section className="pt-[100px] pb-[80px] bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-[1200px] mx-auto px-[24px] flex flex-col md:flex-row items-center gap-[24px]">

        {/* 左側：テキスト */}
        <div className="flex-1">
          <h1 className="text-[40px] font-bold mb-[16px]">
            Hi, I'm Rikuto Mikado
          </h1>
          <p className="text-[18px] text-gray-600 dark:text-gray-300">
            I am learning front-end development and building my portfolio.
          </p>
        </div>

        {/* 右側：画像 */}
        <div className="flex-shrink-0 w-[300px] h-[300px] rounded-[20px] overflow-hidden shadow-lg">
          <img
            src={rikutoImage}
            alt="Rikuto Mikado"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}




  