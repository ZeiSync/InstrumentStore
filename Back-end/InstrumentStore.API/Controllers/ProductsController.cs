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
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly IMapper _mapper;

        public ProductsController(IProductService productService, IMapper mapper)
        {
            this._productService = productService;
            this._mapper = mapper;
        }

        [HttpGet("")]
        public async Task<ActionResult<IEnumerable<ProductResource>>> GetAllProducts()
        {
            var product = await _productService.GetAllWithBrand();

            var productResources = _mapper.Map<IEnumerable<Product>, IEnumerable<ProductResource>>(product);

            return Ok(productResources);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProductResource>> GetProductById(int id)
        {
            var product = await _productService.GetProductById(id);
            var productResource = _mapper.Map<Product, ProductResource>(product);

            return Ok(productResource);
        }

        [HttpPost("")]
        public async Task<ActionResult<ProductResource>> CreateProduct([FromBody] SaveProductResource saveProductResource)
        {
            var validator = new SaveProductResourceValidator();
            var validationResult = await validator.ValidateAsync(saveProductResource);

            if (!validationResult.IsValid)
                return BadRequest(validationResult.Errors); // this needs refining, but for demo it is ok

            var productToCreate = _mapper.Map<SaveProductResource, Product>(saveProductResource);

            var newProduct = await _productService.CreateProduct(productToCreate);

            var product = await _productService.GetProductById(newProduct.ProductId);

            var productResource = _mapper.Map<Product, ProductResource>(product);

            return Ok(productResource);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ProductResource>> UpdateProduct(int id, [FromBody] SaveProductResource saveProductResource)
        {
            var validator = new SaveProductResourceValidator();
            var validationResult = await validator.ValidateAsync(saveProductResource);

            var requestIsInvalid = id == 0 || !validationResult.IsValid;

            if (requestIsInvalid)
                return BadRequest(validationResult.Errors); // this needs refining, but for demo it is ok

            var productToBeUpdate = await _productService.GetProductById(id);

            if (productToBeUpdate == null)
                return NotFound();

            var product = _mapper.Map<SaveProductResource, Product>(saveProductResource);

            await _productService.UpdateProduct(productToBeUpdate, product);

            var updatedProduct = await _productService.GetProductById(id);
            var updatedProductResource = _mapper.Map<Product, ProductResource>(updatedProduct);

            return Ok(updatedProductResource);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            if (id == 0)
                return BadRequest();

            var product = await _productService.GetProductById(id);

            if (product == null)
                return NotFound();

            await _productService.DeleteProduct(product);

            return NoContent();
        }
    }
}