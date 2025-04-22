export default function LocationSection() {
    return (
      <section className="bg-white py-16 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">how to access</h2>
        <p className="mb-2">〒123-4567 東京都渋谷区カフェ通り1-2-3</p>
        <p className="mb-2">営業時間：10:00~20:00</p>
        <p className="mb-6">最寄駅：表参道駅 徒歩5分</p>
  
        <div className="w-full h-64">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d376.7209770252958!2d139.71462067982503!3d35.66984368681604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sjp!4v1745303770452!5m2!1sen!2sjp"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    );
  }
  