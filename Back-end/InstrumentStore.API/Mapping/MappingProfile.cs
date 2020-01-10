using AutoMapper;
using InstrumentStore.API.Resources.SaveResources;
using InstrumentStore.API.Resources.ViewResources;
using InstrumentStore.API.Resources.ViewResources.Piano;
using InstrumentStore.Core.Models;
using InstrumentStore.Core.Models.Piano;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InstrumentStore.API.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            // Domain to Resource
            CreateMap<Product, ProductResource>()
                .ForMember(p => p.Quantities, x => x.MapFrom(t => t.Quantity.Quantities))
                .ForMember(p => p.Branch, x => x.MapFrom(t => t.Branch.BranchName))
                .ForMember(p => p.Category, x => x.MapFrom(t => t.Branch.Category.CategoryName))
                .ForMember(p => p.Description, x => x.MapFrom(t => t.Description));

            CreateMap<Brand, BrandResource>();
            CreateMap<Description, DescriptionResource>();
            CreateMap<Specification, SpectificationResource>();
            CreateMap<GrandPiano, GrandPianoResource>();
            CreateMap<UprightPiano, UprightPianoResource>();
            CreateMap<DigitalPiano, DigitalPianoResource>();

            CreateMap<Brand, SaveBrandResource>();
            CreateMap<Brand, BrandResource>();

            CreateMap<Product, SaveProductResource>();

            //Resource to Domain
            CreateMap<ProductResource, Product>();
            CreateMap<BrandResource, Brand>();
            CreateMap<DescriptionResource, Description>();
            CreateMap<SpectificationResource, Specification>();
            CreateMap<GrandPianoResource, GrandPiano>();
            CreateMap<UprightPianoResource, UprightPiano>();
            CreateMap<DigitalPianoResource, DigitalPiano>();

            CreateMap<SaveBrandResource, Brand>();
            CreateMap<BrandResource, Brand>();

            CreateMap<SaveProductResource, Product>();
        }
    }
}
