using FluentValidation;
using InstrumentStore.API.Resources.SaveResources;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InstrumentStore.API.Validators
{
    public class SaveBrandResourceValidator : AbstractValidator<SaveBrandResource>
    {
        public SaveBrandResourceValidator()
        {
            RuleFor(b => b.BrandName)
                .NotEmpty()
                .MaximumLength(50);
        }
    }
}
