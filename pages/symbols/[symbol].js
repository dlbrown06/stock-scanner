import { useRouter } from 'next/router';

const Symbol = () => {
    const router = useRouter()
    const { symbol } = router.query
  
    return <p>Symbol: {symbol}</p>;
  }
  
  export default Symbol;