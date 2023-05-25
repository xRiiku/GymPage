export default function ContactMap() {
    return (
      <div className="p-20">
        <div className="w-full h-full flex justify-center items-center">
          <iframe className="w-full h-[600px] maxmd:h-[400px] maxls:h-[250px] maxxs:h-[100px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6969.697052587329!2d-72.02112798843275!3d42.73765988090713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e1616054a939a5%3A0x59aa9490d71d1300!2s333%20Middle%20Winchendon%20Rd%2C%20Rindge%2C%20NH%2003461%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1685007937269!5m2!1ses!2ses"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    );
  }
  