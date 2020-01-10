using FluentValidation;
using InstrumentStore.API.Resources.SaveResources;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InstrumentStore.API.Validators
{
    public class SaveProductResourceValidator : AbstractValidator<SaveProductResource>
    {
        public SaveProductResourceValidator()
        {
            RuleFor(p => p.ProductName)
                .NotEmpty()
                .MaximumLength(50)
                .WithMessage("Dude i need a name for this");

            RuleFor(p => p.Popularity);

            RuleFor(p => p.Price)
                .NotEmpty()
                .WithMessage("We dunt sale anything for free");

            RuleFor(p => p.BranchId)
                .NotEmpty()
                .WithMessage("For the tree");

            RuleFor(p => p.BrandId)
                .NotEmpty()
                .WithMessage("For the tree");
        }
    }
}
