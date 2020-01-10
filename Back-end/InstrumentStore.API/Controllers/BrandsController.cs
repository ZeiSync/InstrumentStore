using AutoMapper;
using InstrumentStore.API.Resources.SaveResources;
using InstrumentStore.API.Resources.ViewResources;
using InstrumentStore.API.Validators;
using InstrumentStore.Core.Models;
using InstrumentStore.Core.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InstrumentStore.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[EnableCors("AllowReact")]
    public class BrandsController : ControllerBase
    {
        private readonly IBrandService _brandService;
        private readonly IMapper _mapper;

        public BrandsController(IBrandService brandService, IMapper mapper)
        {   
            this._mapper = mapper;
            this._brandService = brandService;
        }

        [HttpGet("")]
        public async Task<ActionResult<IEnumerable<BrandResource>>> GetAllBrands()
        {
            var brands = await _brandService.GetAllBrands();
            var brandResources = _mapper.Map<IEnumerable<Brand>, IEnumerable<BrandResource>>(brands);

            return Ok(brandResources);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BrandResource>> GetBrandById(int id)
        {
            var brand = await _brandService.GetBrandById(id);
            var brandResource = _mapper.Map<Brand, BrandResource>(brand);

            return Ok(brandResource);
        }

        [HttpPost("")]
        public async Task<ActionResult<BrandResource>> CreateBrand([FromBody] SaveBrandResource saveBrandResource)
        {
            var validator = new SaveBrandResourceValidator();
            var validationResult = await validator.ValidateAsync(saveBrandResource);

            if (!validationResult.IsValid)
                return BadRequest(validationResult.Errors); // this needs refining, but for demo it is ok

            var brandToCreate = _mapper.Map<SaveBrandResource, Brand>(saveBrandResource);

            var newBrand = await _brandService.CreateBrand(brandToCreate);

            var brand = await _brandService.GetBrandById(newBrand.BrandId);

            var brandResource = _mapper.Map<Brand, BrandResource>(brand);

            return Ok(brandResource);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<BrandResource>> UpdateBrand(int id, [FromBody] SaveBrandResource saveBrandResource)
        {
            var validator = new SaveBrandResourceValidator();
            var validationResult = await validator.ValidateAsync(saveBrandResource);

            if (!validationResult.IsValid)
                return BadRequest(validationResult.Errors); // this needs refining, but for demo it is ok

            var brandToBeUpdated = await _brandService.GetBrandById(id);

            if (brandToBeUpdated == null)
                return NotFound();

            var brand = _mapper.Map<SaveBrandResource, Brand>(saveBrandResource);

            await _brandService.UpdateBrand(brandToBeUpdated, brand);

            var updatedBrand = await _brandService.GetBrandById(id);

            var updatedBrandResource = _mapper.Map<Brand, BrandResource>(updatedBrand);

            return Ok(updatedBrandResource);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBrand(int id)
        {
            var brand = await _brandService.GetBrandById(id);

            await _brandService.DeleteBrand(brand);

            return NoContent();
        }
    }
}