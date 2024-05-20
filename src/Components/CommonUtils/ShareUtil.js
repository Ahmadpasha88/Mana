
const productTitle = 'Hostel';
const productDescription = 'Check out this amazing hostel!';
const productUrl = 'https://www.google.co.in/maps';

export const handleShare = async ({ title=productTitle, text=productDescription, url=productUrl }) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: text,
          url: url,
        });
        console.log('Product shared successfully');
      } catch (error) {
        console.error('Error sharing', error);
      }
    } else {
      console.log('Web Share API not supported in this browser');
    }
  };
  