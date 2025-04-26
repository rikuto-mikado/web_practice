import Image from "next/image";

const menuItems = [
    { image: "/cafe-site-menu01.png", name: "カフェラテ", price: "￥500" },
    { image: "/cafe-site-menu02.png", name: "抹茶ラテ", price: "￥550" },
    { image: "/cafe-site-menu03.png", name: "コーヒー", price: "￥400" },
    { image: "/cafe-site-menu04.png", name: "抹茶コーヒー", price: "￥600" }
]

export default function MenuSection() {
    return (
        <section className='w-full flex flex-col items-center'>
            <h2 className='text-3xl font-bold mb-8'>Menu</h2>
        </section>
    )
}