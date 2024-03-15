using AutoMapper;
using Repository.DTO;
using Repository.Entities;

namespace Repository.Core
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
            CreateMap<QuoteDTO, Quote>().ReverseMap();

        }
    }
}