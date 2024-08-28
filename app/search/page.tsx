import { Container } from "@/components/shared/container";
import { Filter } from "@/components/shared/filter";
import { ProductCard } from "@/components/shared/product-card";
import { SearchBox } from "@/components/shared/search";

export default function SearchPage (){
    return(
        <Container className="mt-10">
            <div className="flex justify-center gap-5">
                {/* Filter */}
                <Filter  className="w-[400px] h-full" />

                <div className="w-full">
                    {/* Search */}
                    <SearchBox />
                    {/* Results */}
                    <ProductCard 
                        id={1}
                        title="Квартира в Алтынке" 
                        desc="Сдаю комнату в Каскелене на 3-4 парней. Идеально подойдет для студентов СДУ. До университета можно дойти пешком всего за 5-7 минут. В комнате есть все необходимое для комфортного проживания: холодильник, стиральная машина, утюг, чайник и плитка для готовки..." 
                        price={50000} 
                        image="https://alakt-photos-kr.kcdn.kz/webp/13/1341a7ad-b02c-48fa-9816-679ea5ff9258/10-750x470.webp" 
                        className="mt-3"/>
                        <ProductCard 
                        id={1}
                        title="Квартира в Алтынке" 
                        desc="Сдаю комнату в Каскелене на 3-4 парней. Идеально подойдет для студентов СДУ. До университета можно дойти пешком всего за 5-7 минут. В комнате есть все необходимое для комфортного проживания: холодильник, стиральная машина, утюг, чайник и плитка для готовки..." 
                        price={50000} 
                        image="https://alakt-photos-kr.kcdn.kz/webp/13/1341a7ad-b02c-48fa-9816-679ea5ff9258/10-750x470.webp" 
                        className="mt-3"/><ProductCard 
                        id={1}
                        title="Квартира в Алтынке" 
                        desc="Сдаю комнату в Каскелене на 3-4 парней. Идеально подойдет для студентов СДУ. До университета можно дойти пешком всего за 5-7 минут. В комнате есть все необходимое для комфортного проживания: холодильник, стиральная машина, утюг, чайник и плитка для готовки..." 
                        price={50000} 
                        image="https://alakt-photos-kr.kcdn.kz/webp/13/1341a7ad-b02c-48fa-9816-679ea5ff9258/10-750x470.webp" 
                        className="mt-3"/><ProductCard 
                        id={1}
                        title="Квартира в Алтынке" 
                        desc="Сдаю комнату в Каскелене на 3-4 парней. Идеально подойдет для студентов СДУ. До университета можно дойти пешком всего за 5-7 минут. В комнате есть все необходимое для комфортного проживания: холодильник, стиральная машина, утюг, чайник и плитка для готовки..." 
                        price={50000} 
                        image="https://alakt-photos-kr.kcdn.kz/webp/13/1341a7ad-b02c-48fa-9816-679ea5ff9258/10-750x470.webp" 
                        className="mt-3"/>
                        <ProductCard 
                        id={1}
                        title="Квартира в Алтынке" 
                        desc="Сдаю комнату в Каскелене на 3-4 парней. Идеально подойдет для студентов СДУ. До университета можно дойти пешком всего за 5-7 минут. В комнате есть все необходимое для комфортного проживания: холодильник, стиральная машина, утюг, чайник и плитка для готовки..." 
                        price={50000} 
                        image="https://alakt-photos-kr.kcdn.kz/webp/13/1341a7ad-b02c-48fa-9816-679ea5ff9258/10-750x470.webp" 
                        className="mt-3"/>
                </div>
            </div>
        </Container>
    )
}