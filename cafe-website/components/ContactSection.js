export default function ContactSection() {
    return (
        <section className='py-16 px-4 bg-white text-[#5c4033]'>
            <h2 className='text-3xl font-bold mb-6 text-center'>お問い合わせ</h2>
            <form
            // This form is currently a dummy form for display purposes only.
            // // No data will be sent. (Form submission is disabled.)
            onSubmit={(e) => e.preventDefault()}
            className='max-w-xl mx-auto space-y-4 mt-8'
            >
                <div>
                    <label htmlFor='name' className='block mb-1 font-medium'>
                        お名前
                    </label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        required
                        className="w-full border border-gray-300 px-4 py-2 rounded"
                    />
                </div>

                <div>
                    <label htmlFor='message' className='block mb-1 font-medium'>
                        メッセージ
                    </label>
                    <textarea
                        name='message'
                        id='message'
                        rows='5'
                        required
                        className='w-full border border-gray-300 px-4 py-2 rounded'
                    />
                </div>

                <button
                    type='submit'
                    className='bg-[#5c4033] text-white px-6 py-2 rounded hover:opacity-90'
                >
                    送信する
                </button>
            </form>
        </section>
    )
}
