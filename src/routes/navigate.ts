import { useRouter } from "next/navigation";
export const useCategoryNavigate =() =>{
const router = useRouter();

 const navigateToCategory = () =>{
    router.push('/category')
}
};

export const useHomeNavigate = () =>{
    const router = useRouter();
    
    const navigateToHome = () =>{
        router.push('/home')
    }
};

export const useLoginNavigate = () =>{
    const router = useRouter();

    const navigateToLogin =() =>{
        router.push('/login')
    }
};

export const useSignupNavigate = () =>{
    const router = useRouter();{

        const navigateToSignup =() =>{
            router.push('/signup')
        }
    }
}