
"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { servicesData } from "@/data/services";
import ServiceCategoryCard from "./service-category-card";

export default function ServicesTabs() {
    return(
        <section className="py-16 md:py-24 bg-muted/50">
            <div className="container max-w-7xl">
                <Tabs defaultValue={servicesData[0].category.toLowerCase()} className="w-full lg:grid lg:grid-cols-4 lg:gap-12">
                    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:flex lg:flex-col lg:h-auto lg:items-start lg:bg-transparent lg:p-0">
                        {servicesData.map((category) => (
                           <TabsTrigger 
                                key={category.category} 
                                value={category.category.toLowerCase()} 
                                className="w-full justify-start text-left text-lg font-headline py-3 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg lg:mb-2 lg:bg-background"
                            >
                                {category.category}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    <div className="lg:col-span-3 mt-8 lg:mt-0">
                        {servicesData.map((category) => (
                            <TabsContent key={category.category} value={category.category.toLowerCase()}>
                                <div className="mb-8">
                                    <h2 className="font-headline text-3xl font-bold mb-2">{category.categoryTitle || category.category}</h2>
                                    <p className="text-muted-foreground">{category.categoryDescription}</p>
                                </div>
                               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {category.services.map((service) => (
                                        <ServiceCategoryCard key={service.title} service={service} />
                                    ))}
                               </div>
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </div>
        </section>
    )
}
