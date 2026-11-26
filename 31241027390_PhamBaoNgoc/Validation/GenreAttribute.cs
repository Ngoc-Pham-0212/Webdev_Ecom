using System.ComponentModel.DataAnnotations;
using _31241027390_PhamBaoNgoc.Data;
namespace _31241027390_PhamBaoNgoc.Validation;

public class GenreAttribute : ValidationAttribute
{
    
    protected override ValidationResult IsValid(object value, ValidationContext
    validationContext)
    {
        if (value == null || !int.TryParse(value.ToString(), out int genreID))
        {
            return new ValidationResult(ErrorMessage ?? "Genre không hợp lệ");
        }
        var _context = (ApplicationDbContext)validationContext
        .GetService(typeof(ApplicationDbContext));
        if (_context.Genres.Any(x => x.ID == genreID))
        {
            return ValidationResult.Success;
        }
        return new ValidationResult(ErrorMessage ?? "Genre không tồn tại");
    }
}